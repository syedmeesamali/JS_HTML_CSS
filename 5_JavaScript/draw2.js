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
        .attr('width', window.innerWidth);

      svg.on('mousedown', function() {
          draw = true;
          const coords = d3.mouse(this);
          draw_point(coords[0], coords[1], false);
      });
    
      svg.on('mouseup', () => {
        draw = false;
      });
    
      svg.on('mousemove', function() {
        if (draw === false)
              return;
          const coords = d3.mouse(this);
          draw_point(coords[0], coords[1], true);
      });

  
  document.querySelector('#erase').onclick = () => 
  {
      for (i=0; i<points.length; i++) 
          points[i].remove();
      for (let j=0; j<lines.length; j++)
          lines[j].remove();
      points = [];
      lines = [];
  } //End of erase

  document.querySelector('#save').onclick = () => 
  {
    
    //Use the domAPI to create an object
    var domURL = window.URL || window.webkitURL || window;
    if (!domURL)
    {
      throw new Error("(bowser doesn't support this)")
    }

    //Create a url and make sure its own name space is defined
    if (!svgText.match(/xmlns="/mi)) {
      svgText = svgText.replace ('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    }

    //Create a blob
    var svg = new Blob([svgText], {
      type: "image/svg+xml; charset=utf-8"
    });

    var url = domURL.createObjectURL(svg);

    //Now we need canvas to transfer this data
    var match = svgText.match(/height=\"(d+)/m);
    var height = match && match[1] ? parseInt(match[1], 10) : 200;
    var match = svgText.match(/width=\"(d+)/m);
    var width = match && match[1] ? parseInt(match[1], 10) : 200;

    var canvas = document.createElement('canvas');
    canvas.width = height + margin * 2;
    canvas.height = width + margin * 2;
    var ctx = canvas.getContext("2d");

    var img = new Image;
        
        // when the image is loaded we can get it as base64 url
        img.onload = function() {
          // draw it to the canvas
          ctx.drawImage(this, margin, margin);
          
          // if it needs some styling, we need a new canvas
          if (fill) {
            var styled = document.createElement("canvas");
            styled.width = canvas.width;
            styled.height = canvas.height;
            var styledCtx = styled.getContext("2d");
            styledCtx.save();
            styledCtx.fillStyle = fill;   
            styledCtx.fillRect(0,0,canvas.width,canvas.height);
            styledCtx.strokeRect(0,0,canvas.width,canvas.height);
            styledCtx.restore();
            styledCtx.drawImage (canvas, 0,0);
            canvas = styled;
          }
          // we don't need the original any more
          domUrl.revokeObjectURL(url);
          // now we can resolve the promise, passing the base64 url
          resolve(canvas.toDataURL());
        };
        
        // load the image
        img.src = url;

  } 


} //End of render()
  
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