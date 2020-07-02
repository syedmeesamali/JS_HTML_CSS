document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    //Mouse coordinates object
    const mouse = {x : undefined,  y : undefined}
    //Main object which will be drawn
    function Particle(x, y, radius, color) {
        this.x = x;     this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = 0;
        this.velocity = 0.05;
        this.update = () => {
            this.radians += this.velocity;
            this.x = x + Math.cos(this.radians) * 100;
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
        for (let i=0; i<1; i++){
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
        }
    } //End of animate
    
    animate();

}) //End of main