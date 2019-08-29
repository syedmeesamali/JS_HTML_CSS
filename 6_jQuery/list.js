var firstElement = document.getElementById('one');
var showText = firstElement.textContent;
var showInnerText = firstElement.innerText;

var msg = '<p>textContent:' + showText + '</p>';
msg += '<p>innerText:' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstElement.textContent = "special bread";