document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const btn = document.getElementById("reset");
    let shape1 = document.getElementById("square-1");

    btn.addEventListener('click', function() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
            randNumber += colors[Math.floor(Math.random() * 15)];
        }
        shape1.style.position = "relative";
        shape1.style.left = shape1.style.top = "10%";
        shape1.style.backgroundColor = randNumber;
    })

    setInterval(changeBox, 500);

    function changeBox() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
            randNumber += colors[Math.floor(Math.random() * 15)];
        }
        shape1.style.backgroundColor = randNumber;
    }
})