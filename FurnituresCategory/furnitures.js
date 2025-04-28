const furnitures = document.querySelector(".furnitures")
// const productInfo = document.querySelector('.productInfo')
// console.log(productInfo.innerHTML);



const products = {

}

function addFurnitures(ProductName, productImage, discountPrice, actualPrice,productDescription) {

    
    
    const isProductExist = Object.keys(products).some((product) => product === ProductName)

    if (isProductExist) {
        throw new Error("Product Name Already Exist");

    } else {

        products[ProductName] = {
            "productImage": productImage,
            "discountPrice": discountPrice,
            "actualPrice": actualPrice,
            "productDescription": productDescription
        }


        fetch('../components/categoryProducts.html')
            .then(response => response.text()
            ).then(data => {
                let parser = new DOMParser()

                let doc = parser.parseFromString(data, 'text/html')

                let image = doc.querySelector(".image")
                let name = doc.querySelector(".productName")
                let offerPrice = doc.querySelector(".discountPrice")
                let originalPrice = doc.querySelector(".actualPrice")




                image.src += productImage
                image.alt = ProductName
                name.textContent = ProductName
                offerPrice.textContent += discountPrice
                originalPrice.textContent += actualPrice

                let anchor = doc.querySelector(".anchor")




                anchor.addEventListener('click', (e) => {
                    // e.preventDefault()

                    anchor.setAttribute(
                        'href',
                        `../FurnituresCategory/product.html?productImg=${encodeURIComponent(productImage)}&productName=${encodeURIComponent(ProductName)}&discountPrice=${encodeURIComponent(discountPrice)}&actualPrice=${encodeURIComponent(actualPrice)}&productDescription=${encodeURIComponent(productDescription)}`
                    );
                    
                    
                });
                if (furnitures) {
                    furnitures.append(doc.body.firstElementChild)
                }

            }
            )

    }
}


addFurnitures("Wardrobe", "warDrobe.jpg", "20,000", "26,000","This modern 4-door wardrobe offers ample storage space with multiple shelves and a sleek, minimalist design. Its smooth matte finish and tall handles add a touch of elegance, making it a stylish addition to any bedroom. Built from durable engineered wood, it combines functionality with contemporary appeal")

addFurnitures("TV Stand", "tvStand.jpg", "10,000", "15,000")

addFurnitures("Study Desk", "studyDesk.jpg", "12,000", "18,000")

addFurnitures("Sofa", "sofa.jpg", "20,000", "30,000")

addFurnitures("Shoe Rack", "shoeRack.jpg", "3,000", "8,000")

addFurnitures("Recliner", "recliner.jpg", "9,000", "13,000")

addFurnitures("Office Chair", "officeChair.jpg", "12,000", "16,000")

addFurnitures("Lounde Chair", "loundeChair.jpg", "15,000", "20,000")

addFurnitures("Dining Table", "diningTable.jpg", "17,000", "23,000")

addFurnitures("Coffee Table", "coffeeTable.jpg", "9,000", "12,000")

addFurnitures("Bookshelf", "bookshelf.jpg", "12,000", "19,000")

addFurnitures("Bedframe", "bedframe.jpg", "25,000", "32,000")

addFurnitures("Bar Stools", "barStools.jpg", "6,000", "9,000")

addFurnitures("Arm Chair", "armChair.jpg", "8,000", "12,000", "Elevate your living space with this stylish pair of modern armchairs, featuring a soft, velvety finish and elegant vertical tufting. Designed with a curved backrest and plush cushioning, they offer both comfort and contemporary charm. Perfect for any lounge or reading nook, these chairs blend luxury with everyday functionality.")

addFurnitures("Night Stand", "nightStand.jpg", "3,000", "5,000")

console.log(products);








