var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');
    var el = document.getElementById('check-class');
    el.innerHTML = attr;
}