import { addToCart } from "./storage.js";

// Creating product card
export const createProductCard = (product) => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounder-ld p-4 m-4 overflow-hidden";
    card.id = product.id;

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.className = "w-full h-48 object-cover";

    const cardBody = document.createElement("div");
    cardBody.className = "p-4";

    const title = document.createElement("h2");
    title.className = "font-bold text-xl";
    title.textContent = product.title;

    const price = document.createElement("p");
    price.className = "text-gray-700";
    price.textContent = product.price;

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add to Cart";
    addBtn.className = "w-full bg-blue-500 text-white font-bold py-2 px-4 rounded";
    addBtn.addEventListener("click", () => addToCart(product));

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(addBtn);
    card.appendChild(image);
    card.appendChild(cardBody);

    return card;
}

// Display the products
