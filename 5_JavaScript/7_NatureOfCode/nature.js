document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    innerWidth = 400;
    innerHeight = 400;
    x = 50;             //Circle center co-ordinates
    y = 50;
    x_vel = 100;        //Speed in x-direction
    y_vel = 100;        //Speed in y-direction
  
    //Random rgba color
    function rgbaColor() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
        randNumber += colors[Math.floor(Math.random() * 15)]; }
        return randNumber; 
    }

    //Circle as an object 
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = rgbaColor();
        this.draw = function () {
            brush.beginPath();
            brush.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false); //2 * Pi is the angle of full circle
            brush.strokeStyle = this.color; 
            brush.fillStyle = this.color;
            brush.fill();
            brush.stroke();
        }
        this.update = function() { 
            this.draw();
            console.log("Inside update!")
        }
    } //End of circle Object with functions
    
    //Main event listener
    canvas.addEventListener('click', function(event) {
        circ_1 = new Circle(x, y, x_vel, y_vel, radius = 50);
        circ_1.draw();
        console.log("Circle 1 = ", circ_1);
        })
}) //End of main