var width = document.getElementById('wid');
var length = document.getElementById('len');
var height = document.getElementById('height');
var name = document.getElementById('name');

function getSize(width, length, height) {
  
    var area1 = width * length;
    var vol1 = width * length * height;
    var sizes = [area1, vol1];

    return sizes;
}

var areaOne = getSize(width, length, height)[0]
var volOne = getSize(width, length, height)[1]

var area = document.getElementById('area');
var vol = document.getElementById('vol');

area.textContent = areaOne;
vol.textContent = volOne;

name.textContent = "Ali Shah";
//document.getElementById("myBtn").onclick = function() {getSize(5,5,5)};