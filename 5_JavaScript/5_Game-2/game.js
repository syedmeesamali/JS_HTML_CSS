document.addEventListener('DOMContentLoaded', () => {        
        const canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        let speed = 5;

        //Player-1 and 2 along with ball all initialized as objects with properties updated
        //and modified as per the program requirements.
        //Excellent object based OOP design

        const player1 = {x: 50, y: 50, speed: 5, width: 35, height: 100, score: 0 };
        const player2 = {x: 550, y: 50, speed: 5, width: 35, height: 100, score: 0 };
        const ball = {x: canvas.width / 2, y: canvas.height / 2, 
                width: 10, height: 10, xs: speed, ys: -speed };   //Ball object between two players

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

        function ballReset() {
                ball.x = canvas.width / 2; 
                ball.y = canvas.height / 2;
                ball.width = 10; ball.height = 10; 
                ball.xs = speed; ball.ys = -speed; 
        }

        //This is the main move function which will move based on the keys pressed
        function move(){
                if(keyz1.ArrowRight && player1.x < ((canvas.width/2) - (player1.width/2)))
                        {player1.x += player1.speed; }         
                else if (keyz1.ArrowLeft && player1.x > 0) 
                        {player1.x -= player1.speed;};
                if(keyz1.ArrowUp && player1.y > 0) 
                        {player1.y -= player1.speed;}
                else if (keyz1.ArrowDown && player1.y < (canvas.height - player1.height))
                        {player1.y += player1.speed;};
                if(keyz2.KeyD && player2.x < ((canvas.width) - player2.width))
                        {player2.x += player2.speed; } 
                else if (keyz2.KeyA && player2.x > ((canvas.width/2) - (player2.width/2)))
                        {player2.x -= player2.speed;};
                if(keyz2.KeyW && player2.y > 0)
                        {player2.y -= player2.speed;} 
                else if (keyz2.KeyS && player2.y < (canvas.height - player2.height))
                        {player2.y += player2.speed;};
                
                ball.x += ball.xs;
                ball.y += ball.ys;

                if (ball.x < 0) {
                        player2.score ++;
                        ballReset();    //Reset position to center of game screen
                } 
                if (ball.x > canvas.width) {
                        player1.score ++;
                        ballReset();
                }

                if ((ball.x <  0 ||  ball.x > canvas.width)) {
                        ball.xs *= -1;  //Reverse ball direction
                } if ((ball.y <  0 ||  ball.y > canvas.height)) {
                        ball.ys *= -1;  //Reverse ball direction
                }

                //Player one is hit
                if (checkCollision(ball, player1)) {
                        ball.xs *= -1;
                        let temp = ((player1.y + player1.height) / 2);
                        let temp1 = ((ball.y + ball.height) / 2);
                        if (temp < temp1) {
                           ball.ys = speed;
                        } else {
                           ball.ys = -speed;
                        }
                }

                //Player two is hit
                if (checkCollision(ball, player2)) {
                        ball.xs *= -1;
                        let temp = ((player2.y + player2.height) / 2);
                        let temp1 = ((ball.y + ball.height) / 2);
                        if (temp < temp1) {
                           ball.ys = speed;
                        } else {
                           ball.ys = -speed;
                        }
                }


        }

        //Check if the two rectangles are colliding with each other
        function checkCollision(obj1, obj2) {
                let val = obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && 
                obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y;
                if (val) {
                        console.log(val);
                } return val;
        }

        //Main draw function including the requestAnimationFrame for faster and smoother experience
        function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                move();
                checkCollision(player1, player2);
                let output = `Player-1: ${player1.score}  v/s  Player-2: ${player2.score}`;
                ctx.fillStyle = 'blue';
                ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
                ctx.fillStyle = 'red';
                ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

                ctx.fillStyle = 'white';                //Draw the ball
                ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

                ctx.font = "18px arial";
                ctx.textAlign = 'left';
                ctx.fillStyle = 'white';
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
