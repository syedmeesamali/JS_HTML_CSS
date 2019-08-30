var newEl = document.createElement('li');
var newText = document.createTextNode('Quencha');
newEl.appendChild(newText);

var pos = document.getElementsByTagName('ul')[0];
pos.appendChild(newEl);
newEl.className = 'cool';