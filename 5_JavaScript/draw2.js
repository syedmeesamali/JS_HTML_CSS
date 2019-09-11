//const svg = d3.select("body").append("svg");
document.addEventListener('DOMContentLoaded', () => {
  //State variable
  let draw = false;
  //Elements
  let points = [];
  let lines = [];
  let svg = null;

  function render() {
      svg = d3.select('#draw')
        .attr('height', window.innerHeight)
        .attr('width', window.innerWidth)

      svg.on('mousedown', function() {
          draw = true;
          const coords = d3.mouse(this);
          draw_point(coords[0], coords[1], false);
      });
    
      svg.on('mouseup', () => {
        draw = false;
      });
    
      svg.on('mousemove', draw_point);
  }

  function draw_point() {
      if (draw === false) 
      {
        return ;
      }
    const coords = d3.mouse(this);
    draw_point(coords[0], coords[1], true);
  };
  
  document.querySelector('#erase').onclick = () => {
      for (let i=0; i<points.length; i++) 
        points[i].remove();
        console.log("Points: " + points.length);
      for (let j=0; j<lines.length; j++)
        console.log("Lines: " + lines.length);
        lines[j].remove();
      points = [];
      lines = [];
  }

  function draw_point(x, y, connect) {
    const color = document.querySelector('#color-picker').value;
    const thickness = document.querySelector('#thickness').value;
    if (connect) {
      const last_point = points[points.length - 1];
      const line1 = svg.append("line")
                  .attr('x1', last_point.attr('cx'))
                  .attr('y1', last_point.attr('cy'))
                  .attr('X2', x)
                  .attr('y2', y)
                  .attr('stroke-width', thickness)
                  .style('stroke', color);
      lines.push(line1);
    }

    const point = svg.append("circle")
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', thickness)
                .style('fill', color)   
  }
render();
}); //End of main function
