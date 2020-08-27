const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]'); 

let lists = [];

let listRef = [
    {id: 1, name: 'name'}, 
    {id: 2, name: 'to-do'}
];  

//Main submit form event listener
newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName == '') return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    render();
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] };  //Return the object as a new list created based on name
}

function render() {
    //<li class="list-name">Work</li>
    clearElement(listContainer);
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add('list-name');
        listElement.innerText = list;
        listContainer.appendChild(listElement);
    })
}

function clearElement(element) {
    while(element.firstChild) {     //Check for first child and if any then remove
        element.removeChild(element.firstChild);
    }
}

render()