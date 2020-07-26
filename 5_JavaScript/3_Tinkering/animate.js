document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var brush = canvas.getContext("2d");
    //innerWidth = 800;
    //innerHeight = 500;
    var maxRadius = 40;

    var mouse = {
        x: undefined,
        y: undefined
    }

    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        //console.log(mouse);
    })

    //Function to draw random circles    
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = rgbaColor();
        this.draw = function () {
            brush.beginPath();
            brush.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false); //2 * Pi is the angle of full circle
            brush.strokeStyle = this.color; 
            brush.fillStyle = this.color;
            brush.fill();
            brush.stroke();
        }
        //Reverse direction once hitting the wall
        this.update = function() {
            
            /*if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            } if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy
            }*/
            this.x += this.dx;
            this.y += this.dy;
            
            //Part of new interactivity based on the mouse position
            if ((mouse.x - this.x < 50) && (mouse.x - this.x > -50) && (mouse.y - this.y < 50) && (mouse.y - this.y > -50))  
            {
                //Grow the circles up to a limit of 40 only
                if (this.radius < maxRadius)
                 {
                     this.radius += 1;
                 }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }
            
            //Draw the circle
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

    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
    })

    let circleArray = [];
    //let counter = 0;
    //let circleCount = document.getElementById("circleCount");
    /*
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
        let radius = (Math.random() * 40);
        console.log("Counter is: " + counter);    
        let x = event.pageX;
        let y = event.pageY;
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 15;
        circleArray.push(new Circle(x,y,dx,dy,radius));
        console.log("circleArray.length = " + circleArray.length);
        //circleCount.textContent = circleArray.length;
    }) */
    
    function init() {
        for (var i=0; i<800; i++) {
            let radius = (Math.random() * 5 + 1);
            let x = Math.random() * (innerWidth - radius * 2) + radius;
            let y = Math.random() * (innerHeight - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 5;
            let dy = (Math.random() - 0.5) * 5;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }
        console.log("Cricle array length is: " + circleArray.length);
    }
    init(); //First main initialization
    
    //Remove the circles after 2 seconds interval
    /*setInterval(popCircle, 1000);
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