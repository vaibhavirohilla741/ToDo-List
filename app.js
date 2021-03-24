
//Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOption= document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    

    // ToDo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check max button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const TrashButton=document.createElement('button');
    TrashButton.innerHTML='<i class="fas fa-trash"></i>';
    TrashButton.classList.add("trash-btn");
    todoDiv.appendChild(TrashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value='';
}

function deleteCheck(e){
    const item=e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value)
        {
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';

                }else{
                    todo.style.display="none";
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display='flex';
                    }else{
                        todo.style.display="none";
                    }
                    break;
        }
    });


}


