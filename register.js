const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = {};
    const formData = new FormData(this);
    formData.forEach((value, key) => {
        data[key] = value;
    })
    console.log(formData);
    

    const db = localStorage.getItem("myDB");
    let parsedDB = JSON.parse(db);
    if (!parsedDB) {
        parsedDB = [data];
    } else {
        parsedDB.push(data);
    }

    localStorage.setItem("myDB", JSON.stringify(parsedDB))
    localStorage.setItem("currentUser", JSON.stringify(data))


    window.location.reload();
    alert("Sign UP Sucessfull");
    window.location.href = "index.html";
})