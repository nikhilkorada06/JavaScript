import { products } from "./database/products.js";

import { createProductCard } from "./createProductCard.js";

import { findRepeatedProduct, findRepeatedProductInWishlist } from "./utils/findRepeatedProduct.js"

const productContainer = document.getElementById("products");
const filterContainer = document.querySelector(".side-bar");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];






productContainer.addEventListener("click", (event) => {
    // Cart logic
    const isProductInCart = findRepeatedProduct(cart, event.target.dataset.id);
    if (!isProductInCart) {
        const productToAddToCart = products.filter(({ _id }) => _id === event.target.dataset.id);
        cart = [...cart, ...productToAddToCart];
        localStorage.setItem("cart", JSON.stringify(cart));
        productContainer.innerHTML = "";
        createProductCard(products, productContainer, findRepeatedProduct,findRepeatedProductInWishlist, "products");
    } else {
        location.href = "cart.html";
    }

    // Wishlist logic
    const isProductInWishlist = findRepeatedProductInWishlist(wishlist, event.target.dataset.id);
    if (!isProductInWishlist) {
        const productToAddToWishlist = products.filter(({ wishlist_id }) => wishlist_id === event.target.dataset.id);
        wishlist = [...wishlist, ...productToAddToWishlist];
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        productContainer.innerHTML = "";
        createProductCard(products, productContainer, findRepeatedProduct, findRepeatedProductInWishlist, "products");
    }else {
        location.href = "wishlist.html";
    }
});

filterContainer.addEventListener("click", (event) => {
    const updatedProducts = products.filter (({rating}) => rating >= Number(event.target.dataset.rating));
    productContainer.innerHTML = "";
    createProductCard(updatedProducts, productContainer, findRepeatedProduct, findRepeatedProductInWishlist, "products" );
})

createProductCard(products, productContainer, findRepeatedProduct, findRepeatedProductInWishlist, "products" );