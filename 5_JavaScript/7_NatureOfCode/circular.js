document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    colors = ['#7d67bc', '#dcd947','#47dc53','#474cdc','#dc479e','#dc6247'];
    //Random rgba colors
    function rgbaColor() {
        for (var i=0; i<6; i++) {
            randNumber = colors[Math.floor(Math.random() * 5)];
        }
        return randNumber;
    }

    //Draw central circle
    function drawCircle() {
        brush.beginPath();
        brush.arc(canvas.width/2, canvas.height/2, 40, 0, Math.PI * 2, false);
        brush.strokeStyle = 'yellow'; //Border color
        brush.fillStyle = 'yellow'; //Filling color
        brush.fill();
        brush.stroke();
    }
    
    //Mouse coordinates object
    const mouse = {x : undefined,  y : undefined}
    //Main object which will be drawn
    function Particle(x, y, radius, color) {
        this.x = x;     this.y = y;
        this.radius = radius;
        this.color = rgbaColor();
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.05;
        this.lastMouse = {x: x, y: y};
        this.distanceFromCenter = {
            dist: Math.random() * 50 + 10
        }
        this.update = () => {
            const lastPoint = {x: this.x, y: this.y}
            this.radians += this.velocity;

            //Create the drag effect as below
            this.lastMouse.x = (mouse.x - this.lastMouse.x) * 0.05;
            this.lastMouse.y = (mouse.y - this.lastMouse.y) * 0.05;

            this.x = mouse.x + Math.cos(this.radians) * this.distanceFromCenter.dist; //Circular movement due to cos angle
            this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter.dist; //y should have sin angle
            this.draw(lastPoint);    } //End of update
            this.draw = lastPoint => {
                brush.beginPath();
                brush.strokeStyle = this.color;
                brush.lineWidth = this.radius;
                brush.moveTo(lastPoint.x, lastPoint.y);
                brush.lineTo(this.x, this.y);
                brush.stroke();
                brush.closePath();
                /*brush.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                brush.fillStyle = this.color;
                brush.fill();
                brush.closePath();*/   
            } //End of draw
        } //End of particle object
        
    //Implementation of particles
    let particles = [];
    function init() {
        for (let i=0; i<20; i++){
            const rad = Math.random() * 2 + 1;
            particles.push(new Particle(canvas.width / 2, canvas.height / 2, 
                rad, 'blue'));
        }
        console.log(particles);
    }
    init();

    //Main event listener
    canvas.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        //console.log(mouse);
    })

    //Main animate function
    function animate() {
        requestAnimationFrame(animate);
        //brush.clearRect(0, 0, innerWidth, innerHeight);
        brush.fillStyle = 'rgba(255, 255, 255, 0.05)'; //Some transparency for rectangle
        brush.fillRect(0, 0, innerWidth, innerHeight);
        for (let j=0; j<particles.length; j++) {
            particles[j].update();
            drawCircle();
        }
    } //End of animate
    
    animate();

}) //End of main