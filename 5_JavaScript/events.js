var userName, noteName, textEnter, target;
noteName = document.getElementById('noteName');

function writeLabel(e) {
    if (!e) { 
        e = window.event;
    }
    target = event.target || event.srcElement;
    textEnter = e.target.value;
    noteName.textContent = textEnter;
}

