document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    innerWidth = 400;
    innerHeight = 400;
    let ht = 5;
    let wid = 20;
    let x = 10; let y = 150;
    
    //Draw base-line as a simple line
    function drawBase() {
    brush.beginPath();brush.moveTo(10, 10); brush.lineTo(210, 10);  
    brush.stroke(); }

    //Draw vertical lines
    function drawVert() {
        brush.beginPath(); brush.moveTo(10, 10); 
        brush.lineTo(10, 150); brush.lineTo(210, 150);
        brush.lineTo(210, 10); brush.stroke(); }

    //Make a rectangle with certain properties
    function makeRect(x,y,wid,ht, fillStyle) {
        this.x = x; this.y = y;
        this.wid = wid; this.ht = ht;
        brush.beginPath();
        brush.rect(x, y, wid, ht); //Draw the rectangle
        brush.strokeStyle = 'blue'; 
        brush.fillStyle = fillStyle;
        brush.fill();
    }
    
    //Random rgba colors
    function rgbaColor() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
        randNumber += colors[Math.floor(Math.random() * 15)]; }
        return randNumber; }
    
    var working;
    //Some movement based on time not clicks
    function makeMoves() {
        ht -= 5; //brush.clearRect(0, 0, innerWidth, innerHeight);
        fillStyle = 'yellow';
        makeRect(x, y, wid, ht, fillStyle);
        makeRect(190, y, wid, ht, fillStyle);
        makeRect(30, y, 5, ht, 'red');
        makeRect(185, y, 5, ht, 'blue');
        if (ht < -135) {
            ht = -135;
            makeRect(x,y,wid,ht, fillStyle);
        }        
    }
    //Main event listener
    canvas.addEventListener('click', function(event) {
        drawBase();
        drawVert();
        if (!working) {
            working = window.setInterval(makeMoves, 100);
            console.log("Working started!");
        } else {
            console.log("Working stopped!");
            window.clearInterval(working);
            working = null;
        }
    })
}) //End of main