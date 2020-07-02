document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    //Mouse coordinates object
    const mouse = {
        x : undefined, 
        y : undefined
    }
    
    //Main object which will be drawn
    function Particle(x, y, radius, color) {
        this.x = x;     this.y = y;
        this.radius = radius;
        this.color = color;
        this.update = () => {
            this.draw();
        }
        this.draw = () => {
            brush.beginPath();
            brush.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            brush.fillStyle = this.color;
            brush.fill();
            brush.closePath();
        }
    }
    
    
    //Implementation of particles
    let particles;
    function init() {
        particles = [];
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
        brush.clearRect(0, 0, canvas.width, canvas.height);
    }
    particles.forEach(particles => {
        particles.update();
    })
}) //End of main