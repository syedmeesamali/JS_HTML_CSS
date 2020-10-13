//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addToDo(event) { 
    event.preventDefault();         //Prevent form from submission
    console.log("Hello there");
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    
    //Add the new buttons
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to the main list
    todoList.appendChild(todoDiv);

    //Clear the to do input
    todoInput.value = "";
}

//Function to delete or to check out an item
function deleteCheck(e) {
    const item = e.target;
    

    //Delete the todo item
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    //Delete the todo item
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}