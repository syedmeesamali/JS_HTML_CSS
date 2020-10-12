//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addToDo);

//Functions
function addToDo(event) { 
    event.preventDefault();         //Prevent form from submission
    console.log("Hello there");
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newToDo = document.createElement('li');
    newToDo.innerText = "Hey";
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    //Add the new buttons
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    //Append to the main list
    todoList.appendChild(todoDiv);
}