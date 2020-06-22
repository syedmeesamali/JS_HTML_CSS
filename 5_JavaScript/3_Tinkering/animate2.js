document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    innerWidth = 400;
    innerHeight = 400;
    let ht = 10;
    let wid = 200;
    let x = 10; let y = 100;
    

    function drawBase() {
        brush.beginPath();       // Start a new path
        brush.moveTo(10, 10);    // Move the pen to (30, 50)
        brush.lineTo(210, 10);  // Draw a line to (150, 100)
        brush.stroke();          // Render the path
    }

    //Make a rectangle with certain properties
    function makeRect(x,y,wid,ht, fillStyle) {
        this.x = x;
        this.y = y;
        this.wid = wid;
        this.ht = ht;
        brush.beginPath();
        brush.rect(x,y,wid,ht);
        brush.strokeStyle = 'blue'; 
        brush.fillStyle = fillStyle;
        brush.fill();
    }
    
    //Random rgba colors
    function rgbaColor() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
            randNumber += colors[Math.floor(Math.random() * 15)];
        }
        return randNumber;
    }
    
    let working;
    //Some movement based on time not clicks
    function makeMoves() {
        ht -= 10;
        //brush.clearRect(0, 0, innerWidth, innerHeight);
        fillStyle = 'red';
        makeRect(x,y,wid,ht, fillStyle);
        if (ht < 10) {
            ht = 10;
            makeRect(x,y,wid,ht, fillStyle);
        }        
    }
    //Main event listener
    canvas.addEventListener('click', function(event) {
        drawBase();
        if (!working) {
            working = window.setInterval(makeMoves, 500);
            console.log("Working started!");
        } else {
            console.log("Working stopped!");
            window.clearInterval(working);
            working = null;
        }
    })

    
}) //End of main