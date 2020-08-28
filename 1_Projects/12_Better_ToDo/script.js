const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]'); 

//Using local storage to store the lists locally else keep the lists as empty
const LOCAL_STORAGE_LIST_KEY = 'task.lists'
let lists = JSON.parse[localStorage.getItem(LOCAL_STORAGE_LIST_KEY)] || []; 


//Main submit form event listener
newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName == '') return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    saveAndRender();
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] };  //Return the object as a new list created based on name
}

function saveAndRender() {
    save()
    render()
}

function save() { 
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
}

//Main render function for the overall program
function render() {
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