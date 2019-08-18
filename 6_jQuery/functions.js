function getSize(width, length, height) {
    var area = width * length;
    var vol = width * length * height;
    var sizes = [area, vol];
    return sizes;
}

var width = document.getElementById('wid');
var length = document.getElementById('len');
var height = document.getElementById('height');
var area = document.getElementById('area');
var vol = document.getElementById('vol');
var areaOne = getSize(width, length, height)[0]
var volOne = getSize(width, length, height)[1]

area.textContent = areaOne;
vol.textContent = volOne;
