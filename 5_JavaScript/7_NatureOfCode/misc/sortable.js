var list = document.getElementById('list');
var base, randomized, dragging, draggedOver;
var isRight = 'Not in order!';
a = [1, 2, 3, 4, 5]
randomized = a.sort(() => Math.random() - 0.5);

//Random numbers
const getRandom = (array) => {
    base = array.slice();
    randomized = array.sort(() => Math.random() - 0.5)
    if (randomized.join("") !== base.join("")) {
        renderItems(randomized);
    } else {
        getRandom();
    }
}

//Render the main list
const renderItems = (data) => {
    document.getElementById('isRight').innerText = isRight;
    list.innerText = '';
    data.forEach(item => {
        var node = document.getElementById('li');
        node.draggable = true;
        node.addEventListener('drag', setDragging);
        node.addEventListener('dragover', setDraggedOver);
        node.addEventListener('drop', compare);
        node.innerText = item;
        list.appendChild(node);
    })
}

//Set Dragging function
const setDragging = (e) =>{
    dragging = parseInt(e.target.innerText)
}


function setDraggedOver(e) {
    e.preventDefault();
    draggedOver = parseInt(e.target.innerText)
}

const compare = (e) =>{
    var index1 = randomized.indexOf(dragging);
    var index2 = randomized.indexOf(draggedOver);
    randomized.splice(index1, 1)
    randomized.splice(index2, 0, dragging)
   
    isRight = randomized.join("") === base.join("") 
      ? 'In Order!': 'Not In Order!'
    
    renderItems(randomized)
};