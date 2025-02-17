// DOM element references
const form = document.querySelector("form");
const userInput = document.getElementById("userInput");
const ul = document.querySelector("ul");
const reloadBtn = document.getElementById("reload");

// Get tasks from localStorage
const getTasks = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Save tasks to localStorage
const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// DRY function to create a list item for a task object
const createListItem = (task) => {
    const li = document.createElement("li");
    li.id = task.id;
    li.classList.add(
        "p-2",
        "border-b",
        "border-gray-300",
        "flex",
        "justify-between",
        "items-center"    
    );

    // Create a span to display the task content
    const span = document.createElement("span");
    span.textContent = task.content;
    li.appendChild(span);

    // Create a red "Delete" button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add(
        "p-1",
        "text-white",
        "bg-red-500",
        "rounded",
        "hover:bg-red-400"
    );

    // Attach an event listener to the delete button
    deleteBtn.addEventListener("click", () => {
        console.log("Deleting task with id: ", task.id);
        // Remove the task from localstorage
        let tasks = getTasks();
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks(tasks);
        // Remove the list from the DOM
        li.remove();
    });

    li.appendChild(deleteBtn);
    return li;
}

// Render tasks from localStorage into the DOM
const renderTasks = () => {
    ul.innerHTML = ""; // Clear the list
    const tasks = getTasks();
    tasks.forEach(task => {
        const li = createListItem(task);
        ul.appendChild(li);
    });
}

// Handle form submission: add a new task
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const content = userInput.value.trim();
    // Check that the input is not empty
    if (!content) {
        alert("Please enter a task");
        return;
    }

    // Create a new task object
    const newTask = {
        // Generate a UUID, remove hyphens, and prepend with "task-"
        id: "task-" + crypto.randomUUID().replace(/-/g, ""),
        content: content
    };

    // Retrieve the current tasks, add the new task at the beginning, and save
    let tasks = getTasks();
    tasks.unshift(newTask);
    saveTasks(tasks);

    // Create a list item for the new task and add it to the top of the list
    const li = createListItem(newTask);
    ul.insertBefore(li, ul.firstChild);

    // Reset the form input
    form.reset();
});

// Reload button event: reloads the preview and re-renders stored tasks
reloadBtn.addEventListener('click', function () {
    location.reload();
});

// On window load, render all tasks from localStorage
window.addEventListener('load', renderTasks);