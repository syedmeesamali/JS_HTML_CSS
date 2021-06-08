document.addEventListener("DOMContentLoaded", () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const canvas = document.getElementById("canvas");
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
      this.draw = function () {
        brush.beginPath();
        brush.moveTo(0, 0);              //Vectors start from origin
        brush.lineTo(x, y);              //Our vector is from origin to defined point of vector
        brush.stroke();
      };
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
  
    //Main event listener
    canvas.addEventListener("click", function (event) {
      vect_1 = new Vector(Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
      vect_2 = new Vector(60, 60);
      vect_loc = new Vector(150, 150);
      vect_speed = new Vector(1, 1);
      vect_2 = new Vector(60, 60);
    });
  
    //Main animate function
    function animate() {
      requestAnimationFrame(animate);
      brush.clearRect(0, 0, innerWidth, innerHeight);             //CLEAN canvas to make movement 
      vect_1.draw();
      vect_1.add(vect_2)
      vect_2.draw();
    }
    animate();
  }); //End of main