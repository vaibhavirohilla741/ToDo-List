const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');


todoButton.addEventListner('click',addTodo);

function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    // ToDo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo=document.createElement('li');
    newTodo.innerText='hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check max button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const TrashButton=document.createElement('button');
    TrashButton.innerHTML='<i class="fas fa-trash"></i>';
    TrashButton.classList.add("complete-btn");
    todoDiv.appendChild(TrashButton);

    //append to list
    todoList.appendChild(todoDiv);
}