document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var brush = canvas.getContext("2d");
    
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
            //brush.arc(100, 75, 50, 0, 2*Math.PI, false);
            brush.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            console.log("X is: " + x);
            console.log("Y is: " + y);
            console.log("Radius is: " + radius);
            brush.strokeStyle = 'black';
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
            } this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

    //Random rgba colors
    function rgbaColor() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
            randNumber += colors[Math.floor(Math.random() * 15)];
        }
        return randNumber;
    }

    let circleArray = [];
    let timer = 0;
    canvas.addEventListener('click', function(event) {
        timer = new Date();
        let timePassed = (new Date() - timer) / 10;
        let radius = (Math.random() * 45);
        if (timePassed > 100) {
            timePassed = 100;
        } 
            timer = 0;
            console.log("X coordinate is: " + event.pageX);
            //let x = event.pageX;
            //let y = event.pageY;
            let x = (Math.random() - 0.5) * 5;
            let y = (Math.random() - 0.5) * 9;
            let dx = (Math.random() - 0.5) * 10;
            let dy = (Math.random() - 0.5) * 10;
            circleArray.push(new Circle(x,y,dx,dy,radius));
    })

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