const listContainer = document.querySelector('[data-lists]');

let lists = ['name', 'to-do'];  //Empty to-do list in the start

function render() {
    //<li class="list-name">Work</li>
    clearElement(listContainer);
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add('list-name');
        listElement.innerText = list;
        listContainer.appendChild(listElement);
    })
}

function clearElement(element) {
}

render()