document.addEventListener('DOMContentLoaded', () => {
        
        const canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        const player = {x: 50, y: 50, speed: 5};           //Object to save two players
        const keyz = {ArrowRight: false, ArrowLeft: false, ArrowUp: false, ArrowDown: false};
        draw();

        document.addEventListener('keydown', keyDownEvent);
        document.addEventListener('keyup', keyUpEvent);
        
        function keyDownEvent(event) {
                keyz[event.code] = true;
                move();
        }

        function keyUpEvent(event) {
                keyz[event.code] = false;
                move();
        }

        function move(){
                if(keyz.ArrowRight) {player.x += player.speed; } 
                        else if (keyz.ArrowLeft) {player.x -= player.speed;};
                if(keyz.ArrowUp) {player.y += player.speed;} 
                        else if (keyz.ArrowDown) {player.y -= player.speed;};
                        draw();
        }
        function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let output = `Pos x: ${player.x} y: ${player.y}`;
                ctx.fillStyle = '#ff3525';
                ctx.fillRect(player.x, player.y, 100, 100);
                ctx.font = "24px serif";
                ctx.textAlign = 'center';
                ctx.fillStyle = 'red';
                ctx.fillText(output, 100, 30);
                //drawCircle();
        }        
    
    //Draw central circle
    function drawCircle() {
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 40, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'yellow'; //Border color
        ctx.fillStyle = 'yellow'; //Filling color
        ctx.fill();
        ctx.stroke();
    }
}) //End of main DOM loaded function
