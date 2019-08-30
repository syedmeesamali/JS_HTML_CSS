var elOne = document.getElementById('one');
var itemContent = elOne.innerHTML;
elOne.innerHTML = '<a href=\"http:www.example.org\">' + itemContent + '</a>';