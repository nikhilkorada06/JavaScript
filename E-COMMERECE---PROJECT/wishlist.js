import {
    createProductCard
} from "./createProductCard.js";
import {
    findRepeatedProduct,
    findRepeatedProductInWishlist
} from "./utils/findRepeatedProduct.js"

let wishlistContainer = document.getElementById("wishlist");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];


wishlistContainer.addEventListener("click", (event) => {
    wishlist = wishlist.filter(({wishlist_id}) => wishlist_id !== event.target.dataset.id);
    wishlistContainer.innerHTML = "";
    createProductCard(wishlist, wishlistContainer, findRepeatedProduct, findRepeatedProductInWishlist, "wishlist");
    localStorage.setItem("wishlist", JSON.stringify(wishlist));



    const isProductInCart = findRepeatedProduct(cart, event.target.dataset.id);
    if (!isProductInCart) {
        const AddToCartFromWishlist = wishlist.filter(({_id}) => _id === event.target.dataset.id);
        cart = [...cart, ...AddToCartFromWishlist];
        localStorage.setItem("cart", JSON.stringify(cart));
        wishlistContainer.innerHTML = "";


        createProductCard(wishlist, wishlistContainer, findRepeatedProduct, findRepeatedProductInWishlist, "wishlist");
    }
    else
    {
        location.href("cart.html")
    }

})

createProductCard(wishlist, wishlistContainer, findRepeatedProduct, findRepeatedProductInWishlist, "wishlist");