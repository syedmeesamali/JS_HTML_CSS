var price, total, quantity;
price = 5;
quantity = 10;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$ ' + total;