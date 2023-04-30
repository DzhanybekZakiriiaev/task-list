'use strict';

const form = document.querySelector('#addTaskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
form.addEventListener('submit', createTask);

function createTask(e) {
    e.preventDefault();
    const taskText = taskInput.value;
    const taskListItem = document.createElement('li');
    taskListItem.textContent = taskText;
    taskListItem.classList.add('list-group-item');
    taskListItem.style.userSelect = 'none';
    taskList.appendChild(taskListItem);
    taskInput.value = '';
    taskInput.focus();
}

const taskElem = document.querySelectorAll(".list-group");

taskElem.forEach((taskElement) => {
    taskElement.addEventListener("dblclick", (event) => {
        event.target.style.textDecoration = "line-through";
    });
});
