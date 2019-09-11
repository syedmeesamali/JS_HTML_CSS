//const svg = d3.select("body").append("svg");
document.addEventListener('DOMContentLoaded', () => {
  //State variable
  let draw = false;
  //Elements
  let points = [];
  let lines = [];
  let svg = null;
  let i = 0;

  function render() {
      svg = d3.select('#draw')
        .attr('height', window.innerHeight)
        .attr('width', window.innerWidth)

      svg.on('mousedown', function() {
          draw = true;
          const coords = d3.mouse(this);
          draw_point(coords[0], coords[1], false);
          console.log("Called first");
      });
    
      svg.on('mouseup', () => {
        draw = false;
      });
    
      svg.on('mousemove', function() {
        draw = true;
        const coords = d3.mouse(this);
        draw_point(coords[0], coords[1], true);
        console.log("Called second");
      });
  }
  
  document.querySelector('#erase').onclick = () => {
      for (i=0; i<points.length; i++) 
        points[i].remove();
        console.log("Points: " + points.length);
      for (i=0; i<lines.length; i++)
        console.log("Lines: " + lines.length);
        lines[i].remove();
      points = [];
      lines = [];
  }

  function draw_point(x, y, connect) {
    const color = document.querySelector('#color-picker').value;
    const thickness = document.querySelector('#thickness').value;
    if (connect) {
      const last_point = points[points.length - 1];
      console.log(last_point);
      const line = svg.append('line')
                  .attr('x1', last_point('cx'))
                  .attr('y1', last_point('cy'))
                  .attr('X2', x)
                  .attr('y2', y)
                  .attr('stroke-width', thickness * 2)
                  .style('stroke', color);
      lines.push(line);
    } else {
      const point = svg.append("circle")
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', thickness)
                .style('fill', color)   
      points.push(point);
    }
    
  }
render();
}); //End of main function