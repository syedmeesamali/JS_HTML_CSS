
function getSize() {

    var width = document.getElementById('wid');
    var length = document.getElementById('len');
    var height = document.getElementById('height');

    var area = document.getElementById('Area');
    var vol = document.getElementById('Volume');

    var area1 = width * length;
    var vol1 = width * length * height;

    area.textContent = area1.toString();
    vol.textContent = vol1.toString();
}

function changeName() {
    var name = document.getElementById('name2');
    name.textContent = "Ali Shah";
}

//document.getElementById("myBtn").onclick = function() {getSize(5,5,5)};