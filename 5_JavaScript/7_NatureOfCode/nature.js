document.addEventListener("DOMContentLoaded", () => {
  const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
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

//VECTOR CLASS
  class Vector {
  constructor(x,y) {
    this._x = x;
    this._y = y;
  }
  get length() {        //Length of a vector
    let x = this._x;    let y = this._y;
    return Math.sqrt(x*x + y*y);
  }
  add(vec) {
    let x = this._x;    let y = this._y;
    let result = false;
    try {
      if (vec.constructor === Vector) {       //Check if we are adding vectors or not
          result = new Vector(x + vec._x, y + vec._y);
      } else if (vec.constructor === Array && vec.length === 2) {
          result = new Vector(x + vec[0], y + vec[1]);
      } 
    } catch (error)  {
      console.log(`ERROR: ${error}`);
    } finally {
      return result;
    }
  } //End of add method

}

  //Circle as an object
  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
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

  velocity = new Vector(1, 1);
  location = new Vector(50, 50);

  //Main event listener
  canvas.addEventListener("click", function (event) {
    circ_1 = new Circle(0, 0, 1,1, (radius = 40));  
    vect_1 = new Vector(200, 250);
  });

  startBtn.addEventListener("click", function (event) {
    vect_1 = new Vector(200, 250);
  });

  //Main animate function
  function animate() {
    requestAnimationFrame(animate);
    brush.clearRect(0, 0, innerWidth, innerHeight);
    circ_1.update();
    vect_1.draw();
  }
  animate();
}); //End of main