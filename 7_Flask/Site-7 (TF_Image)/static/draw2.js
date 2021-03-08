//const svg = d3.select("body").append("svg");
document.addEventListener('DOMContentLoaded', () => {
  //State variable
  let draw = false;
  //Elements
  let points = [];
  let lines = [];
  let svg = null;
  let i = 0;
  
  //Main render function
  function render() {
      svg = d3.select('#draw')
        .attr('height', window.innerHeight)
        .attr('width', window.innerWidth);
      //Mouse down or pressed
      svg.on('mousedown', function() {
          draw = true;
          const coords = d3.mouse(this);
          draw_point(coords[0], coords[1], false);
      });
      //Mouse up or released
      svg.on('mouseup', () => {
        draw = false;
      });
      //Mouse movement
      svg.on('mousemove', function() {
        if (draw === false)
              return;
          const coords = d3.mouse(this);
          draw_point(coords[0], coords[1], true);
      });

  //Erase the drawing
  document.querySelector('#erase').onclick = () => 
  {
      for (i=0; i<points.length; i++) 
          points[i].remove();
      for (let j=0; j<lines.length; j++)
          lines[j].remove();
      points = [];
      lines = [];
  } //End of erase

} //End of render()

//Main drawing subroutine
function draw_point(x, y, connect) {
    const color = document.querySelector('#color-picker').value;
    const thickness = document.querySelector('#thickness').value;
    if (connect) {
      const last_point = points[points.length - 1];
      const line = svg.append('line')
                  .attr('x1', last_point.attr('cx'))
                  .attr('y1', last_point.attr('cy'))
                  .attr('x2', x)
                  .attr('y2', y)
                  .attr('stroke-width', thickness * 2)
                  .style('stroke', color);
      lines.push(line);
    } 
      const point = svg.append("circle")
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', thickness)
                .style('fill', color)   
      points.push(point);
  }; //End of draw_point function

render();
});