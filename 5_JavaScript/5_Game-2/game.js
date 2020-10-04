document.addEventListener('DOMContentLoaded', () => {
        
        const canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        const player1 = {x: 50, y: 50, speed: 5, width: 15, height: 100 };   //Player - 1 as object
        const player2 = {x: 550, y: 50, speed: 5, width: 15, height: 100};   //Player - 2 as object
        const keyz1 = {ArrowRight: false, ArrowLeft: false, ArrowUp: false, ArrowDown: false};
        const keyz2 = {KeyD: false, KeyA: false, KeyW: false, KeyS: false};
        requestAnimationFrame(draw);

        document.addEventListener('keydown', keyDownEvent);
        document.addEventListener('keyup', keyUpEvent);
        
        function keyDownEvent(event) {
                if (event.code in keyz1) { keyz1[event.code] = true; }
                if (event.code in keyz2) { keyz2[event.code] = true; }
                //move();
        }

        function keyUpEvent(event) {
                if (event.code in keyz1) { keyz1[event.code] = false; }
                if (event.code in keyz2) { keyz2[event.code] = false; }
                //move();
        }

        function move(){
                if(keyz1.ArrowRight) {player1.x += player1.speed; } 
                        else if (keyz1.ArrowLeft) {player1.x -= player1.speed;};
                if(keyz1.ArrowUp) {player1.y -= player1.speed;} 
                        else if (keyz1.ArrowDown) {player1.y += player1.speed;};
                if(keyz2.KeyD) {player2.x += player2.speed; } 
                        else if (keyz2.KeyA) {player2.x -= player2.speed;};
                if(keyz2.KeyW) {player2.y -= player2.speed;} 
                        else if (keyz2.KeyS) {player2.y += player2.speed;};
               // draw();
        }

        function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                move();
                let output = `x1: ${player1.x} y1: ${player1.y} ||| x2: ${player2.x} y2: ${player2.y}`;
                ctx.fillStyle = 'blue';
                ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
                ctx.fillStyle = 'red';
                ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
                ctx.font = "18px serif";
                ctx.textAlign = 'left';
                ctx.fillStyle = 'red';
                ctx.fillText(output, 100, 30);
                requestAnimationFrame(draw);
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
