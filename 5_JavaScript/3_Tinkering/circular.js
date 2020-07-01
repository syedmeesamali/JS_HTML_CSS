document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    var brush = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    //Mouse coordinates object
    const mouse = {
        x : undefined, 
        y : undefined
    }
    
    //Main object to be moved


    //Main event listener
    canvas.addEventListener('click', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    })

    //Main animate function
    function animate() {
        requestAnimationFrame(animate);
        brush.clearRect(0, 0, canvas.width, canvas.height);
    }
}) //End of main