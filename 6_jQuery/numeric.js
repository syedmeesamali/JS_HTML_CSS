var price; 
var total; 
var quantity;

price = 5;
quantity = 10;
total = price * quantity;

var el = document.getElementById('itemcost');
el.textContent = '$value ' + total;