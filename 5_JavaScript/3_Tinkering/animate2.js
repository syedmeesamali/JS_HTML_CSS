document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    innerWidth = 800;
    innerHeight = 500;

    //Function to draw random rectangles
    function Rectangle(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = 'red';
        this.draw = function () {
            brush.beginPath();
            brush.rect(x,y,size,size);
            brush.strokeStyle = 'blue'; 
            brush.fillStyle = this.color;
            brush.fill();
            brush.stroke();
        }
        //Reverse direction once hitting the wall
        this.update = function() {
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    } //End of circle function

    let rectArray = [];
    canvas.addEventListener('click', function(event) {
        //If there are no circles then can't check for the hit inside one
        let size = (Math.random() * 45);
        let x = event.pageX;
        let y = event.pageY;
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 15;
        rectArray.push(new Rectangle(x,y,dx,dy,size));
        circleCount.textContent = rectArray.length;
    })

    //Main animate function
    function animate(){
        requestAnimationFrame(animate);
        brush.clearRect(0, 0, innerWidth, innerHeight);
        for (let i=0; i<rectArray.length; i++) {
            rectArray[i].update();
        }
    }
    animate();
}) //End of main