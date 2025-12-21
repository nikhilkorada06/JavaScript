import { findRepeatedProductInWishlist } from './utils/findRepeatedProduct.js'; // or whatever your path is


export const createProductCard = (products, parentElement, findRepeatedProduct, findRepeatedProductInWishlist, pageType) =>
{
    for (let product of products)
    {
        const cardContainer = document.createElement("div");
    
        cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative", "shadow", "margin");
    
    
        /** Image container */
    
        const imageContaier = document.createElement("div");
        imageContaier.classList.add("card-image-container", "relative");

        const wishlistButton = document.createElement("button");
        wishlistButton.classList.add("wishlist-button", "absolute");
        wishlistButton.setAttribute("data-id", product.wishlist_id);

       
        const wishlistIcon = document.createElement("span");

        const isProductInWishlist = findRepeatedProductInWishlist(JSON.parse(localStorage.getItem("wishlist") || "[]"), product.wishlist_id);
        let wishlistClass = "wishlist-border";
        if (pageType === "wishlist" || (pageType === "products" && isProductInWishlist)) {
           wishlistClass = "wishlist-filled";
        }
         wishlistIcon.classList.add(wishlistClass);

        wishlistIcon.setAttribute("data-id", product.wishlist_id);
        wishlistIcon.innerHTML = "&#10084;";
        
        wishlistButton.appendChild(wishlistIcon);
        imageContaier.appendChild(wishlistButton);
    
        const image = document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src", product.img);
        image.setAttribute("alt", product.name);
    
        imageContaier.appendChild(image);
    
    
    
        /**Card details container */
    
        const cardDetailsContainer = document.createElement("div");
        cardDetailsContainer.classList.add("card-details");
    
        const brandContainer = document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText = product.brand;
        cardDetailsContainer.appendChild(brandContainer);
    
    
    
        /**Card Description Container */
    
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("card-description");
    
    
    
        /**Product Name */
    
        const name = document.createElement("p");
        name.classList.add("card-des");
        name.innerText = product.name;
        descriptionContainer.appendChild(name);
    
    
    
        /**Product Price */
    
        const price = document.createElement("p");
        price.classList.add("card-price", "d-flex", "align-end", "gap-sm");
        price.innerText = `${product.newPrice}`;
    
        const oldPrice = document.createElement("span");
        oldPrice.classList.add("price-strike-through");
        oldPrice.innerText = `Rs. ${product.oldPrice}`;
        price.appendChild(oldPrice);
    
        const discount = document.createElement("span");
        discount.classList.add("discount");
        discount.innerText = `(${product.discount}% OFF)`;
        price.appendChild(discount);
    
    
        descriptionContainer.appendChild(price);
    
    
        /**Rating Container */
    
        const ratings = document.createElement("p");
        ratings.classList.add("d-flex", "align-center");
    
        const rating = document.createElement("span");
        rating.innerText = product.rating;
        ratings.appendChild(rating);
    
        const starIcon = document.createElement("img");
        starIcon.classList.add("img-size");
        starIcon.setAttribute("src", "https://th.bing.com/th?q=Star-Rating+Icon+Blue+White+PNG+Image&w=120&h=120&c=1&rs=1&qlt=90&r=0&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247");
        ratings.appendChild(starIcon);
    
        descriptionContainer.appendChild(ratings);
    
        cardDetailsContainer.appendChild(descriptionContainer);
    
    
    
        /** CTA Button Container */
    
        const ctaButton = document.createElement("div");
        ctaButton.classList.add("cta-btn");
        cardDetailsContainer.appendChild(ctaButton);
    
        const cartButton = document.createElement("button");
        cartButton.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin");
        cartButton.setAttribute("data-id", product._id);
    
        ctaButton.appendChild(cartButton);
    
    
        const cartIcon = document.createElement("img");
    
        cartIcon.setAttribute("src","https://uilight.netlify.app/assets/cart-white.png");
        cartIcon.setAttribute("alt","cart");
        cartIcon.setAttribute("data-id", product._id);
    
        cartButton.appendChild(cartIcon);

        const isProductInCart = findRepeatedProduct(JSON.parse(localStorage.getItem("cart")), product._id);
    
        const buttonInfo = document.createElement("span");
        buttonInfo.setAttribute("data-id", product._id);
        buttonInfo.innerText = ( pageType === "cart" ) ? ("Remove") : (pageType === "products" && isProductInCart ? "Go To Cart" : "Add To Cart");

        cartButton.appendChild(buttonInfo);
    
    
        cardContainer.appendChild(imageContaier);
        cardContainer.appendChild(cardDetailsContainer);
    
    
        parentElement.appendChild(cardContainer);    //adding  child
    }
    
}