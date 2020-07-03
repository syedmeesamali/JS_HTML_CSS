document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
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
        this.color = color;
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.02;
        this.update = () => {
            this.radians += this.velocity;
            this.x = x + Math.cos(this.radians) * (Math.random() * 50 + 50); //Circular movement due to cos angle
            this.y = y + Math.sin(this.radians) * (Math.random() * 50 + 50); //y should have sin angle
            this.draw();    } //End of update
            this.draw = () => {
                brush.beginPath();
                brush.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                brush.fillStyle = this.color;
                brush.fill();
                brush.closePath();   } //End of draw
        } //End of particle object
        
    //Implementation of particles
    let particles = [];
    function init() {
        for (let i=0; i<50; i++){
            particles.push(new Particle(canvas.width / 2, canvas.height / 2, 
                5, 'blue'));
        }
        console.log(particles);
    }
    init();

    //Main event listener
    canvas.addEventListener('click', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    })

    //Main animate function
    function animate() {
        requestAnimationFrame(animate);
        brush.clearRect(0, 0, innerWidth, innerHeight);
        
        for (let j=0; j<particles.length; j++) {
            particles[j].update();
            drawCircle();
        }
    } //End of animate
    
    animate();

}) //End of main