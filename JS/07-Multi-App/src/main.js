import { getProducts } from "./modules/network.js";
import { createProductCard } from "./modules/ui.js";

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const productContainer = document.getElementById("product-container");
        const products = await getProducts("https://fakestoreapi.com/products");
        
        products.forEach(product => {
            const productCard = createProductCard(product);
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error(error);
    }
})