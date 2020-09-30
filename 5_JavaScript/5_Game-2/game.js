document.addEventListener('DOMContentLoaded', () => {
        
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const player = {x: 50, y: 50}
        draw();

        function draw() {
                let output = `Pos x: ${player.x} y: ${player.y}`;
                ctx.fillStyle = '#ff3525';
                ctx.fillRect(player.x, player.y, 100, 100);
                ctx.font = "24px serif";
                //ctx.textAlign = 'center';
                ctx.fillStyle = 'red';
                ctx.fillText(output, 100, 30);

                //Draw a triangle
                ctx.beginPath();
                ctx.fillStyle = 'blue';
                ctx.moveTo(100, 200);
                ctx.lineTo(150, 250);
                ctx.lineTo(150, 150);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(150, 75, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = 'yellow';
                ctx.fill();
                ctx.stroke();
                
        }
        
        
        
        
}) //End of main DOM loaded function
