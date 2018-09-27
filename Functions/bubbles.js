let bubbles = [];

function setup() {
    createCanvas(600,500);
    for (var i=0; i<4; i++) {
        bubbles[i] = {
            x: 200,
            y: 300,
            display: function() {
                stroke(255);
                noFill();
                ellipse(this.x, this.y, 24, 24);
            },
            move: function() {
                this.x = this.x + random(-1,1);
                this.y = this.y + random(-1,1);
            }
        }
    }
}

function draw() {
    background(0);
    bubbles[0].move();
    bubbles[0].display();
}

