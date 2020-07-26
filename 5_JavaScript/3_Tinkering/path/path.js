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
    function Circle1(x, y, dx, dy, radius) {
        this.x = x;      this.y = y;      this.dx = dx;       this.dy = dy;
        this.radius = radius;     this.color = "red";
        this.draw = function () {
            brush.beginPath();
            brush.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false); //2 * Pi is the angle of full circle
            brush.strokeStyle = this.color; brush.fillStyle = this.color;
            brush.fill(); brush.stroke();
        }
        this.update = function() {
        if (this.x <= 540 && this.y <= 540) { this.x = 540; };
            this.x += this.dx; this.y += this.dy; this.draw(); }
    } //End of circle function

    function Circle2(x, y, dx, dy, radius) {
        this.x = x;      this.y = y;      this.dx = dx;       this.dy = dy;
        this.radius = radius;     this.color = "blue";
        this.draw = function () {
            brush.beginPath();
            brush.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false); //2 * Pi is the angle of full circle
            brush.strokeStyle = this.color; brush.fillStyle = this.color;
            brush.fill(); brush.stroke();
        }
        this.update = function() { 
            if (this.x >= 500 && this.y <= 500) { this.x = 500; this.y = 475; };
            this.x += this.dx; this.y += this.dy; this.draw(); }
    } //End of circle function

    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })
        var circle1 = new Circle1(700, 600, -0.5, -0.5, 6);
        var circle2 = new Circle2(400, 600, 0.5, -0.5, 20);
    
    
    //Main animate function
    function animate(){
        requestAnimationFrame(animate);
        brush.clearRect(0, 0, innerWidth, innerHeight);
            circle1.update();
            circle2.update();        
            Line1(); //Right most line
            Line2(); //First left line
            Line3(); //Left most line
    }
    animate();
}) //End of main