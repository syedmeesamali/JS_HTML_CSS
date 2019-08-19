
function getSize(width, length, height) {


var width = document.getElementById('wid');
var length = document.getElementById('len');
var height = document.getElementById('height');

width.textContent = 20;

var area = document.getElementById('Area');
var vol = document.getElementById('Volume');

    var area1 = width * length;
    var vol1 = width * length * height;
    var sizes = [area1, vol1];

    var areaOne = sizes(width, length, height)[0]
    var volOne = sizes(width, length, height)[1] 

    area.textContent = "ali";
    vol.textContent = "shah";
}

function changeName() {
    var name = document.getElementById('name2');
    name.textContent = "Ali Shah";
}

//document.getElementById("myBtn").onclick = function() {getSize(5,5,5)};