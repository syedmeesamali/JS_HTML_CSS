document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var brush = canvas.getContext("2d");
    //Draw the main fixed back-ground path
    function Line1() {
            brush.beginPath();        brush.moveTo(800,750);      brush.lineTo(700,0);
            brush.closePath();        brush.strokeStyle = "red";      brush.stroke();     }
    function Line2() {
        brush.beginPath();        brush.moveTo(500,400);      brush.lineTo(500,0);
        brush.closePath();        brush.stroke();     }
    function Line3() {
        brush.beginPath();        brush.moveTo(500,400);      brush.lineTo(100,0);
        brush.closePath();        brush.stroke();     }
    

    //Function to draw random circles    
    function Circle(x, y, dx, dy, radius) {
        this.x = x;      this.y = y;      this.dx = dx;       this.dy = dy;
        this.radius = radius;
        this.color = "blue";
        this.draw = function () {
            brush.beginPath();
            brush.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false); //2 * Pi is the angle of full circle
            brush.strokeStyle = this.color; 
            brush.fillStyle = this.color;
            brush.fill();
            brush.stroke();
        }
        this.update = function() {
            //Portion to reverse the direction of circle
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


    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    let circleArray = [];
    //Main initialization function
    function init() {    
        circleArray.push(new Circle(700, 600, -1, -1, 10));
        circleArray.push(new Circle(400, 600, 1, -1, 20));
        }
    init(); //First main initialization
    
    //Main animate function
    function animate(){
        requestAnimationFrame(animate);
        brush.clearRect(0, 0, innerWidth, innerHeight);
        for (let i=0; i<circleArray.length; i++) {
            circleArray[i].update();
            Line1(); //Right most line
            Line2(); //First left line
            Line3(); //Left most line
        }
    }
    animate();
}) //End of main