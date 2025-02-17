// Add an event listener to handle form submission.
/* 
 ** Validate that all fields are not empty.
 ** If validation passes, output the form data to the console and display it in the p element as a list (ul)
 ** If not output an error message in the p element, style it as an error. Maybe something red and flashy?
 ** Make sure to toggle the error and success styles! 
 ** Clear the form fields
*/
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const p = document.querySelector("p");
    const ul = document.createElement("ul");
    if (name && email && message) {
        ul.innerHTML = `
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Message: ${message}</li>
        `;
        p.innerHTML = "";
        p.appendChild(ul);
        p.classList.remove("error");
        p.classList.add("success");
        form.reset();
    } else {
        p.innerHTML = "All fields are required";
        p.classList.remove("success");
        p.classList.add("error");
    } 
})