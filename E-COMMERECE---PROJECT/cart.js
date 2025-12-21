//  import { createProductCard } from "./createProductCard.js";
import { createHorizontalProductCard } from "./createHorizontalProductCard.js";
import {findRepeatedProduct, findRepeatedProductInWishlist} from "./utils/findRepeatedProduct.js"

let cartContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart"))  || [];




cartContainer.addEventListener("click", (event) => {
    cart = cart.filter(({_id}) => _id !== event.target.dataset.id);
    cartContainer.innerHTML = "";
    createHorizontalProductCard(cart, cartContainer, findRepeatedProduct, findRepeatedProductInWishlist, "cart");
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
})

//  createProductCard(cart, cartContainer, findRepeatedProduct, "cart");


createHorizontalProductCard(cart, cartContainer, findRepeatedProduct, "cart");



const cartLenght = document.querySelector(".item-count");
cartLenght.innerText = cart.length;

const productPrice = document.querySelector(".product-price");
productPrice.innerText = cart.reduce ((accumulator, current) => accumulator + current.oldPrice ,  0);

const discount = document.querySelectorAll(".discounted-amount");
const priceBeforeDiscount = cart.reduce((accumulator, current) => accumulator + current.oldPrice ,  0); 
const priceAfterDiscount = cart.reduce((accumulator, current) => accumulator + current.newPrice,  0)

for(let element of discount)
    {element.innerText = priceBeforeDiscount - priceAfterDiscount ;}


const totalAmount = document.querySelector(".total-amount");
totalAmount.innerText = priceAfterDiscount + 100 ;