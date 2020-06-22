document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    innerWidth = 400;
    innerHeight = 400;
    let ht = 10;
    let wid = 200;
    let x = 10; let y = 10;
    function makeRect(x,y,wid,ht) {
        this.x = x;
        this.y = y;
        this.wid = wid;
        this.ht = ht;
        brush.beginPath();
        brush.rect(x,y,wid,ht);
        brush.strokeStyle = 'blue'; 
        brush.fillStyle = 'red';
        brush.fill();
    }
    

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
        ht += 10;
        makeRect(x,y,wid,ht);
        if (ht > 100) {
            x += 5; y += 5;
            makeRect(x,y,wid,ht);
        }
        
    })

    
}) //End of main