var el = document.getElementById('one');
el.className = 'cool';

var elements = document.getElementsByTagName('li');
if (elements.length > 1) {
    var el = elements[2];
    el.className = 'cool';
}

