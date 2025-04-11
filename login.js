const data = localStorage.getItem("myDB");
const usersInfo = JSON.parse(data);
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const error = document.querySelector("#error");

    let found = false;

    if (usersInfo) {
        usersInfo.forEach(element => {
            if (element.email === email.value && element.password === password.value) {
                found = true;
                alert("Login Successful");
                localStorage.setItem("currentUser", JSON.stringify(element));
                window.location.href = "index.html";
            }
        });

        if (!found) {
            error.style.display = "block";
            error.textContent = "Invalid email or password.";
        }
    } else {
        error.style.display = "block";
        error.textContent = "No users found. Please register first.";
    }
});
