document.addEventListener('DOMContentLoaded', () => {
        doStuff();
        const canvas = document.getElementById('canvas');
        const brush = canvas.getContext('2d');
        brush.rect(50, 50, 100, 100);
        brush.fillStyle = '#ffffff';
        brush.fill();
        function doStuff() {
              
        }// End of doStuff function
}) //End of main DOM loaded function
