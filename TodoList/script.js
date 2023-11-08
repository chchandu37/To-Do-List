document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addTodo = document.getElementById('addTodo');
    const todoList = document.getElementById('todoList');

    addTodo.addEventListener('click', function () {
        const taskText = todoInput.value;
        if (taskText.trim() !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;   
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function (e) {
        if (e.target && e.target.className === 'delete') {
            e.target.parentElement.remove();
        }
    });

    todoList.addEventListener('change', function (e) {
        if (e.target && e.target.type === 'checkbox') {
            e.target.nextElementSibling.style.textDecoration = e.target.checked ? 'line-through' : 'none';
        }
    });
});
