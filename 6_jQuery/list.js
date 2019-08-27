var el = document.getElementById('one');
el.className = 'cool';

var elements = document.getElementsByTagName('li');
if (elements.length > 1) {
    var el = elements[2];
    el.className = 'cool';
}

var hotelements = document.querySelectorAll('li.hot');
if (hotelements.length > 1) {
    for (var i=0; i < hotelements.length; i++) 
    {
        hotelements[i].className = 'cool';
    }
}