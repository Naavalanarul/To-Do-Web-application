const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function addTask() {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    li.onclick = () => li.classList.toggle('done');
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.innerHTML = '&times;';
    del.onclick = e => {
        e.stopPropagation();
        li.remove();
    };
    li.appendChild(del);
    list.appendChild(li);
    input.value = '';
    input.focus();
}

addBtn.onclick = addTask;
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTask();
});