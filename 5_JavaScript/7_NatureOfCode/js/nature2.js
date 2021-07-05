document.addEventListener("DOMContentLoaded", () => {
console.log("DOM loaded!")
function setup() {
  createCanvas(720, 400);
  backgroud(200, 200);
  fill(255, 0, 0);
}
function draw() {
  rect(40, 120, 120, 40);
  ellipse(240, 240, 80, 80);
  triangle(300, 100, 320, 100, 310, 80);
}

}); //End of main