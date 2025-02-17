// Get references to our DOM elements
const form = document.querySelector("form");
const userInput = document.getElementById("userInput");
const ul = document.querySelector("ul");
const reloadBtn = document.getElementById("reload");

// Function to get stored quotes from localStorage
function getQuotes() {
    const storedQuotes = localStorage.getItem("quotes");
    return storedQuotes ? JSON.parse(storedQuotes) : [];
}

// Function to save quotes array to localStorage
function saveQuotes(quotes) {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to render quotes into the list
function renderQuotes() {
    // Clear the list first
    ul.textContent = "";
    const quotes = getQuotes();
    quotes.forEach(quote => {
        const li = document.createElement("li");
        li.textContent = quote;
        li.classList.add("p-2", "border-b", "border-gray-300");
        ul.appendChild(li);
    });
}

// Handle form submission: store and display the new quote
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent form from submitting in the traditional way

    const quote = userInput.value.trim();

    // Check that the input isn’t empty
    if (!quote) {
        alert("Please enter a quote before submitting.");
        return; // Stop further execution if input is empty
    }

    // Retrieve the current array and add the new quote at the beginning
    const quotes = getQuotes();
    quotes.unshift(quote);
    saveQuotes(quotes);

    // Add the new quote to the top of the list in the DOM
    const li = document.createElement("li");
    li.textContent = quote;
    li.classList.add("p-2", "border-b", "border-gray-300");
    ul.insertBefore(li, ul.firstChild);
    // ul.appendChild(li);
    // ul.scrollTop = ul.scrollHeight;

    // Reset the form input field
    form.reset();
})

// Reload the page when the "Reload" button is clicked
reloadBtn.addEventListener("click", () => {
    location.reload();
})

// When the page loads, render any stored quotes.
window.addEventListener("load", renderQuotes);