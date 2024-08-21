// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the value from the input and trim white spaces

    if (taskText === '') {
        alert('Please enter a task.'); // Basic input validation
        return;
    }

    const li = document.createElement('li'); // Create a new list item
    li.textContent = taskText; // Set the text content to the input value

    // Create a delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    
    // Add delete functionality to the delete button
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li); // Remove the task from the list
    });

    // Add the delete button to the list item
    li.appendChild(deleteBtn);

    // Toggle the 'completed' style when the task is clicked
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Add a task when the "Add" button is clicked
addTaskBtn.addEventListener('click', addTask);

// Add a task when the "Enter" key is pressed
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Clear all tasks when the "Clear All" button is clicked
clearAllBtn.addEventListener('click', () => {
    taskList.innerHTML = ''; // Remove all tasks from the list
});