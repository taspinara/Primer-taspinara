/**
 * Fetch products from the Fake Store API.
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products: ", error);
        return [];
        
    }
}