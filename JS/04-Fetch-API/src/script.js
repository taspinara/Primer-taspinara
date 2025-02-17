// Promise
/* const isThereTimeToGame = new Promise((resolve, reject) => {
    Math.random() > 0.5
        ? resolve("Yes, there is time to game")
        : reject("No, there is no time to game");
});

isThereTimeToGame
    .then((resolve) => console.log(resolve)
    .catch((reject) => console.log(reject))); */

// Fetch .then/.catch
/* const fetchFunction = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Something went wrong. Status: ${response.status}`);
            } else {
                return response.json();
            }
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}
fetchFunction(); */

// Fetch - async/await
const fetchFunctionAsyncAwait = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/postsa/1");
        if (!response.ok) {
            throw new Error(`Something went wrong. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    
    } catch (error) {
        console.error(error);
    }
} 
fetchFunctionAsyncAwait();