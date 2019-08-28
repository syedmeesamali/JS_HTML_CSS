var el = document.getElementById('one');
el.className = 'cool';

var elTwo = document.getElementById('one');
var elText = elTwo.firstChild.nextSibling.nodeValue;
var elText = elText.replace('Fresh Figs', 'new figs');
elTwo.firstChild.nextSibling.nodeValue = elText;
