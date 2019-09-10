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
      for (let j=0; j<lines.length; j++)
        lines[i].remove();
        points = [];
        lines = [];
  }

  function draw_point() {
    const color = document.querySelector('color-picker').value;
    const thickness = document.querySelector('thickness').value;
    if (connect) {
      const last_point = points[points.length - 1];
      const line = svg.append('line');
    }
  }

}); //End of main function