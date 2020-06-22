document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const canvas = document.getElementById('canvas');
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    var brush = canvas.getContext("2d");
    innerWidth = 800;
    innerHeight = 500;

    //Function to draw random circles    
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
            brush.strokeStyle = 'blue'; 
            brush.fillStyle = this.color;
            brush.fill();
            brush.stroke();
        }
        //Reverse direction once hitting the wall
        this.update = function() {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            } if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy
            } 
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    } //End of circle function

    //Random rgba colors
    function rgbaColor() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
            randNumber += colors[Math.floor(Math.random() * 15)];
        }
        return randNumber;
    }

    let circleArray = [];
    let counter = 0;
    let circleCount = document.getElementById("circleCount");
    canvas.addEventListener('click', function(event) {
        //If there are no circles then can't check for the hit inside one
        if (circleArray.length != 0) {
            circleArray.forEach(function (arrayItem) {
                var x1 = arrayItem.x;
                var y1 = arrayItem.y;
                if (Math.sqrt((event.pageX - x1)^2 + (event.pageY - y1)^2 ) < arrayItem.radius);
                {
                    console.log("Clicked in a circle!");
                    return false;
                }
            });
        }
        counter++;
        let radius = (Math.random() * 45);
        console.log("Counter is: " + counter);    
        let x = event.pageX;
        let y = event.pageY;
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 15;
        circleArray.push(new Circle(x,y,dx,dy,radius));
        console.log("circleArray.length = " + circleArray.length);
        circleCount.textContent = circleArray.length;
    })

    //Mouse position function
    function getMouse(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.pageX - rect.left,
            y: event.pageY - rect.top
        };
    }
    
    //Remove the circles after 2 seconds interval
    /*setInterval(popCircle, 2000);
    function popCircle() {
        if (circleArray.length != 0) {
            circleArray.pop(Math.floor(Math.random() * circleArray.length));
        }
    }*/

    //Main animate function
    function animate(){
        requestAnimationFrame(animate);
        brush.clearRect(0, 0, innerWidth, innerHeight);
        for (let i=0; i<circleArray.length; i++) {
            circleArray[i].update();
        }
    }
    animate();
}) //End of main