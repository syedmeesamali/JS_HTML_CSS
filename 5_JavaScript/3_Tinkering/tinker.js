document.addEventListener('DOMContentLoaded', () => {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let shape1 = document.getElementById("square-1");
    
    const text = document.querySelector(".fancy"); //Animate text
    const stringText = text.textContent;
    const splitText = stringText.split("");
    text.textContent = "";
    for (let i=0; i<splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let count = 0;
    const btn = document.querySelectorAll(".btn");
    btn.forEach(function (btn) {
        btn.addEventListener('click', function(e) {
            const styles = e.currentTarget.classList;
            if (styles.contains('decrease')){
                count--;
            } else if (styles.contains('increase')) {
                count++;
            } else {
                count = 0;
            }
            shape1.style.font.size = "20px"
            shape1.textContent = count;
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