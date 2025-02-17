import { addToCart } from "./storage.js";

/**
 * Create a product card element.
 * @param {Object} product - The product object.
 * @returns {HTMLElement} The product card element.
 */
export function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg overflow-hidden flex flex-col";

    // Product image
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.className = "w-full h-48 object-contain p-4";
    card.appendChild(img);

    // Content container
    const content = document.createElement("div");
    content.className = "p-4 flex-grow";

    // Product title
    const title = document.createElement("h2");
    title.className = "text-lg font-semibold mb-2";
    title.textContent = product.title;
    content.appendChild(title);

    // Product price
    const price = document.createElement("p");
    price.className = "text-gray-700 font-bold";
    price.textContent = `$${product.price}`;
    content.appendChild(price);

    card.appendChild(content);

    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "p-4";
    
    const addToCartButton = document.createElement("button");
    addToCartButton.className = "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full";
    addToCartButton.textContent = "Add to Cart";
    
    // Add to cart event listener
    addToCartButton.addEventListener("click", () => {
        addToCart(product);
        alert(`${product.title} added to cart!`);
    });

    buttonContainer.appendChild(addToCartButton);
    card.appendChild(buttonContainer);

    return card;
}

/**
 * Display products in the specified container.
 * @param {Array} products - Array of product objects.
 * @param {string} containerId - The ID of the container to display products.
 */
export function displayProducts(products, containerId = "product-container") {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous content
    products.forEach((product) => {
        const card = createProductCard(product);
        container.appendChild(card);
    })
}