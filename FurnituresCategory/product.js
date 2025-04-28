const url = new URL(window.location.href)

const params = new URLSearchParams(url.search)



const productImage = params.get('productImg')

const productName = params.get('productName')

const discountPrice = params.get('discountPrice')


const actualPrice = params.get('actualPrice')

const productDescription = decodeURIComponent(params.get('productDescription'));




const image = document.querySelector('.image')
image.src += productImage

const nameOfProduct = document.querySelector('.productName')
nameOfProduct.textContent = productName

const offerPrice = document.querySelector('.discountPrice')
offerPrice.textContent += " " + discountPrice

const originalPrice = document.querySelector('.actualPrice')
originalPrice.textContent += " " + actualPrice

const productInfo = document.querySelector(".description")

productInfo.textContent = productDescription






const button = document.querySelector('.addToCart')

let storage = localStorage.getItem('myDB');
let users = JSON.parse(storage)

let storage1 = localStorage.getItem('currentUser');
let user = JSON.parse(storage1)


button.addEventListener('click', function () {

    if (storage == null) {
        console.log('login required');

    } else {
        Object.values(users).forEach((element) => {

            const { email } = element;


            if (email === user.email) {
                if (element[productName]) {
                    element[productName].quantity += 1
                    localStorage.setItem('myDB', JSON.stringify(users))
                } else {
                    element[productName] = {}
                    element[productName].productName = productName
                    element[productName].productImage = productImage
                    element[productName].discountPrice = discountPrice
                    element[productName].actualPrice = actualPrice
                    element[productName].quantity = 1
                    localStorage.setItem('myDB', JSON.stringify(users))
                }




                // })



            }

        })

    }



});
;
