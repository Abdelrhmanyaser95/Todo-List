// script.js
let todoList = document.getElementById('todo-list');
let todoForm = document.getElementById('todo-form');
let todoInput = document.getElementById('todo-input');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === '') {
    alert('Please enter a task!');
    return;
  }

  addTask(newTask);
  todoInput.value = ''; // Clear the input field after adding a task
});

function addTask(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  checkBox.addEventListener('change', function() {
    if (this.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = '';
    }
  });

  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });
}