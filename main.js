


const arrives=document.querySelector("#arrives")

arrives.addEventListener("click",()=>{
    window.location.href="FurnituresCategory/furnitures.html"
})



const login = document.querySelector(".login");

login.addEventListener("click", () => {
    window.location.href = "login.html";


})


const HomeAppliances = document.querySelector('.HomeAppliances');

HomeAppliances.addEventListener("click", () => {
    window.location.href = "HomeApplianceCategory/appliances.html";


})

const furnitures = document.querySelector('.furnitures');

furnitures.addEventListener("click", () => {
    window.location.href = "FurnituresCategory/furnitures.html";


})


const user = document.querySelector(".signIn");

const currentUser=localStorage.getItem("currentUser");
const parsedUser= JSON.parse(currentUser);
console.log(parsedUser);
if (currentUser) {
    user.textContent=`Hi ${parsedUser.username}`
    
}

const logout =document.querySelector("#logout");

logout.addEventListener("click", () => {
    localStorage.removeItem("currentUser");  
    window.location.reload();     
});

const cart =document.querySelector(".cart");
cart.addEventListener("click",()=>{
    window.location.href="/Cart/cart.html";
})