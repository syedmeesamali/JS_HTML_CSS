document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    innerWidth = 400;
    innerHeight = 400;
    x = 50; y = 50;
  
    //Array circles
    function makeCircles() {
        //brush.beginPath();
        brush.strokeStyle = 'red';
        brush.arc(x, y, 40, 0, 2 * Math.PI, true);
        brush.stroke();
    }
    
    //Main event listener
    canvas.addEventListener('click', function(event) {
        x += 50; y += 50;
        makeCircles();
        })
}) //End of main