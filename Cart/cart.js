const tbody = document.querySelector('tbody')

tbody.style.width = "auto";
const storage = localStorage.getItem('myDB')

const userdata = JSON.parse(storage)


const storage1 = localStorage.getItem('currentUser')
const userdata1 = JSON.parse(storage1)

userdata.forEach((element) => {



    if (element.email === userdata1.email) {


        Object.entries(element).forEach((productInfo) => {




            const [productDesc, productDetails] =
                productInfo


            if (productDesc != 'username' && productDesc != 'email' && productDesc != 'password') {
               
                const tr = document.createElement('tr')
                const td = document.createElement('td')
                const quantity = document.createElement('td')
                const name = document.createElement('td')
                const price = document.createElement('td')
                const image = document.createElement('img')
                image.style.width = "150px"
                image.style.borderRadius = "10px"
                image.src = "../AllImages/" + productDetails.productImage

                name.textContent = productDetails.productName
                Object.assign(name.style, {
                    width: "auto",
                    height: "170px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "30px",
                    fontWeight:"500"
                });

                let firstprice =  productDetails.discountPrice.replace('₹','').replace(',','')
               let secondPrice= (Number(firstprice))*productDetails.quantity
                
               let productPrice = new Intl.NumberFormat('en-In',{
                style:'currency',
                currency:'INR'
               }).format(secondPrice)

                price.textContent =  productPrice
                Object.assign(price.style, {
                    
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontSize: "30px",
                    height: "100px",
                });

                quantity.textContent=productDetails.quantity
                Object.assign(quantity.style, {
                    width: "auto",
                    height: "170px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"center",
                    fontSize: "30px",
                    color:'red'
                });
                td.appendChild(image)

                tr.appendChild(td)
                tr.appendChild(name)
                tr.appendChild(price)
                tr.appendChild(quantity)
                tbody.appendChild(tr)
            }
        })


    }



})





const columnIndex = 2;

let subTotal = 0;

Array.from(tbody.rows).forEach(row => {



    const cell = row.cells[columnIndex];
    const cellText = cell.textContent.replace('₹', '')

    const price = Number(cellText.replace(",", ''))

    subTotal += price




});

let total = new Intl.NumberFormat('en-In', {
    style: 'currency',
    currency: 'INR'
}).format(subTotal)

let totalAmount = document.querySelector('.totalAmount')
totalAmount.textContent=total
console.log(total);














