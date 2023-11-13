// Name : Ahmad El-khawaldeh
// course: 1005 
// ID: 101257771
// Assignment: 3



// Initialise an empty array with the variable name todoItems
let todoItems = [];
// Counter for generating unique todo IDs
let todoIdCounter = 0;

// Function to add a todo to the list
function addToDoItem(text) {
  // Check if the input is a non-empty string
  if (typeof text !== 'string' || text.trim() === '') {
    console.error('Invalid input. Todo text must be a non-empty string.');
    return;
  }

  const newTodo = {
    id: todoIdCounter++,
    text: text.trim(), // Remove leading and trailing whitespaces
    completed: false,
  };
  todoItems.push(newTodo);
}

// Function to remove a todo from the list
function removeToDoItem(todoId) {
  const todoIndex = todoItems.findIndex((todo) => todo.id === todoId);

  // extra code to check if the todo exists
  if (todoIndex === -1) {
    console.error(`Todo with ID ${todoId} not found.`);
    return;
  }

  todoItems.splice(todoIndex, 1);
}

// Function to mark a task as completed
function markToDoItemAsCompleted(todoId) {
  const todo = todoItems.find((todo) => todo.id === todoId);

  // extra code to check if the todo exists
  if (!todo) {
    console.error(`Todo with ID ${todoId} not found.`);
    return;
  }

  todo.completed = true;
}

// Function to delete a task from the array
function deleteToDoItem(todoId) {
  const todoIndex = todoItems.findIndex((todo) => todo.id === todoId);

  // extra code to check if the todo exists
  if (todoIndex === -1) {
    console.error(`Todo with ID ${todoId} not found.`);
    return;
  }

  todoItems.splice(todoIndex, 1);
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  todoItems = todoItems.filter((todo) => !todo.completed);
}

// Example 
addToDoItem("Buy groceries");
addToDoItem("Read a book");
console.log(todoItems);
markToDoItemAsCompleted(0);
console.log(todoItems);
removeToDoItem(1);
console.log(todoItems); 
clearCompletedTasks();
console.log(todoItems);