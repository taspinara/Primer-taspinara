// Array of 10 random tasks as strings
const tasks = [
    'Complete the project',
    'Attend the meeting',
    'Write a report',
    'Review the code',
    'Fix the bugs',
    'Update the documentation',
    'Plan the next sprint',
    'Conduct user testing',
    'Optimize the performance',
    'Design',
];

// Attach an event to the first button to create a new li in the ul with a random task from the provided array.
// Make sure you scroll to the last task so the last one is always visible!
const addItemButton = document.querySelector("#add-item-btn");
addItemButton.addEventListener("click", function() {
    const ul = document.querySelector("#item-list");
    const li = document.createElement("li");
    const randomIndex = Math.floor(Math.random() * tasks.length);
    li.textContent = tasks[randomIndex];
    ul.appendChild(li);
    li.scrollIntoView();
})

// Attach an event to the second button to display an alert with a custom message.
const alertButton = document.querySelector("#alert-btn");
alertButton.addEventListener("click", function() {
    alert("Some problems have been detected. Please fix them and try again.");
})

// Attach an event to the third button to output a custom message to the console.
const consoleButton = document.querySelector("#console-btn");
consoleButton.addEventListener("click", function() {
    console.log("Some problems have been detected. Please fix them and try again.")
})