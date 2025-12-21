export const findRepeatedProduct = (cart, productId) =>
{
    const isProductInCart = cart && cart.length>0 && cart.some(({_id}) => _id===productId);
    return isProductInCart;
}

export const findRepeatedProductInWishlist = (wishlist, productId) =>
{
    const isProductInWishlist = wishlist && wishlist.length>0 && wishlist.some(({wishlist_id}) => wishlist_id===productId);
    return isProductInWishlist;
}
