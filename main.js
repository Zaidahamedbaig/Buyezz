


const arrives = document.querySelector("#arrives")

arrives.addEventListener("click", () => {
    window.location.href = "FurnituresCategory/furnitures.html"
})



const login = document.querySelector(".login");

login.addEventListener("click", () => {
    window.location.href = "login.html";


})



const user = document.querySelector(".signIn");

const currentUser = localStorage.getItem("currentUser");
const parsedUser = JSON.parse(currentUser);
// console.log(parsedUser.name);
if (currentUser) {
    user.textContent = `Hi ${parsedUser.username}`

}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
});

const cart = document.querySelector(".cart");
cart.addEventListener("click", () => {
    window.location.href = "/Cart/cart.html";
})


let category = {
    // category1: {
    //     categoryId: 1,
    //     categoryName: Furnitures,
    //     categoryImg: furnitures.png
    // },

}

let categories = document.querySelector(".categories");


function addCategory(categoryNo, categoryId, categoryName, categoryImg,categoryPage) {

    const isCategoryExist= Object.keys(category).some((cat)=> cat===categoryNo)

    const isPropertyExist = Object.values(category).some((cat) => cat.categoryId === categoryId || cat.categoryName === categoryName )



    if (isPropertyExist || isCategoryExist) {
        throw new Error("Category or Category Properties Already Exist");

    } else {

        category[categoryNo]={}

        category[categoryNo].categoryId = categoryId;
        category[categoryNo].categoryName = categoryName;
        category[categoryNo].categoryImg = categoryImg

        fetch('./components/category.html')
            .then(response => response.text())
            .then(data => {

                const parser = new DOMParser()
                const doc = parser.parseFromString(data, 'text/html')
                doc.querySelector('a').href=categoryPage
                doc.querySelector('img').src += categoryImg
                doc.querySelector('img').alt += categoryName
                doc.querySelector('h2').textContent = categoryName
                categories.innerHTML += doc.body.innerHTML;
            }

            )
    }


}

console.log(category);

addCategory("category1", 1, "Furnitures", 'furnitures.png',"/FurnituresCategory/furnitures.html");
addCategory("category2", 2, "Home Appliances", 'homeAppliance.png');
addCategory("category3", 3, "Smartphones", 'smartphones.png');
addCategory("category4", 4, "Watches", 'watches.jpg');
addCategory("category5", 5, "Laptops", 'laptops.png');
addCategory("category6", 6, "bags", 'bags.png');
addCategory("category7", 7, "Home Unique", 'homeUnique.jpg');
addCategory("category8", 8, "Sport", 'sport.jpg');

console.log(category);


