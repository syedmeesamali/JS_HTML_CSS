document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let shape1 = document.getElementById("square-1");

    let count = 0;
    const btn = document.querySelectorAll(".btn");
    btn.forEach(function (btn) {
        btn.addEventListener('click', function(e) {
            console.log(e.currentTarget);
        })
    });

    setInterval(changeBox, 1000);
    function changeBox() {
        let randNumber = "#";
        for (var i=0; i<6; i++) {
            randNumber += colors[Math.floor(Math.random() * 15)];
        }
        shape1.style.backgroundColor = randNumber;
    }
})