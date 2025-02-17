/**
 * Retrieve the cart from localStorage.
 * @returns {Array} An array of products.
 */
export function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

/**
 * Add a product to the cart and save it in localStorage.
 * @param {Object} product - The product to add.
 */
export function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}