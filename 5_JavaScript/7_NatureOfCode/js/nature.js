document.addEventListener("DOMContentLoaded", () => {
  const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const keyz = {ArrowRight: false, ArrowLeft: false, ArrowUp: false, ArrowDown: false};
  document.addEventListener('keydown', keyDownEvent);
  function keyDownEvent(event) {
    if (event.code in keyz) { 
      keyz[event.code] = true; 
    }
  }
  const canvas = document.getElementById("canvas");
  const startBtn = document.getElementById('natureBtn');
  var brush = canvas.getContext("2d");
  innerWidth = 400;
  innerHeight = 400;
  x = 40; //Circle center co-ordinates
  y = 40; //Use CTRL + SHIFT + L to select all y ; Nice learning today
  x_vel = 1; //Speed in x-direction
  y_vel = 1; //Speed in y-direction

  //Random rgba color
  function rgbaColor() {
    let randNumber = "#";
    for (var i = 0; i < 6; i++) {
      randNumber += colors[Math.floor(Math.random() * 15)];
    }
    return randNumber;
  }

  //Circle as an object
  function Circle(x, y, dx, dy, radius) {
    this.x = x;           //Location
    this.y = y;
    this.dx = dx;         //Speed
    this.dy = dy;
    this.radius = radius;
    this.color = rgbaColor();
    
    this.draw = function () {
      brush.beginPath();
      brush.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false); //2 * Pi is the angle of full circle
      brush.strokeStyle = this.color;
      brush.fillStyle = this.color;
      brush.fill();
      brush.stroke();
    };
    this.update = function () {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
            this.dx = -this.dx;
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
            this.dy = -this.dy;
      this.draw();
    };
  } //End of circle Object with functions

  function collision(obj1, obj2) {
    var dist = Math.sqrt((obj2.x - obj1.x)**2 + (obj2.y - obj1.y)**2)
    if (dist <= (obj1.radius + obj2.radius))
      {
        obj1.dx = -obj1.dx;
        obj2.dx = -obj2.dx;
        obj1.dy = -obj1.dy;
        obj2.dy = -obj2.dy;
      }  //End of collision
      return obj1.x, obj1.y;
  }
 
  //Click event
  canvas.addEventListener("click", function (event) {
    circ_1 = new Circle(x, y, x_vel, y_vel, (radius = 40));  
  });

  //Button event listener
  startBtn.addEventListener("click", function (event) {
    circ_2 = new Circle(x, y, x_vel, y_vel, (radius = 25));  
  });

  //Main animate function
  function animate() {
    brush.clearRect(0, 0, innerWidth, innerHeight);
    circ_1.update();
    circ_2.update();
    collision(circ_1, circ_2);      //Distance for collision checks
    if (keyz == ArrowLeft) {
      if(typeof circ_1 != "undefined") {
        circ_1.x = circ_1.x - 10;
      }
    }
    requestAnimationFrame(animate);
  }
  
  animate();
}); //End of main