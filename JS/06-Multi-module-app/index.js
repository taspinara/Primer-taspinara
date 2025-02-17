import { fetchProducts } from "./modules/network.js";
import { displayProducts } from "./modules/ui.js";

document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchProducts();
    displayProducts(products);
});