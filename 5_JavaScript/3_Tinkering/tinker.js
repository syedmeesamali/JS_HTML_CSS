document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const btn = document.getElementById("reset");
    let shape1 = document.getElementById("square-1");

    btn.addEventListener('click', function() {
        console.log("Button clicked");
        const randNumber = 2;
        shape1.style.backgroundColor = "red";
    })
})