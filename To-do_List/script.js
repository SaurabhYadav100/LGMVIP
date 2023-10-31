function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            ${taskText}
            <button class="delete-button" onclick="deleteTask(this)">&#10060</button>
        `;
        todoList.appendChild(li);
        taskInput.value = '';
    }
}
function deleteTask(button) {
    const todoList = document.getElementById('todo-list');
    todoList.removeChild(button.parentElement);
}
