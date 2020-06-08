document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    let num1 = document.getElementById("nums").value;
    let val1 = parseDozen(num1);
    let btn = document.getElementById("reset");
    btn.addEventListener('click', () => {
        console.log("Val is: " + num1);
        console.log("Donuts are: " + val1);
    })
    var timer = setInterval("document.getElementById('fruit-2').src = './img/figs.png'", 2000);
    function parseDozen(inputString) {
        numDons = parseInt(inputString);
        if (inputString.indexOf("dozen") != -1) {
            numDons *= 12;
        } return numDons;
    }
})


// document.addEventListener('DOMContentLoaded', () => {
//     var isSwap = true;
//     let img1 = document.querySelector('#fruit-1');
//     let img2 = document.querySelector('#fruit-5');
//     img2.addEventListener('click', () => {
//         img2.style.visibility = 'hidden';
//         img1.style.visibility = 'visible';
//     });
//     img1.addEventListener('click', () => {
//         img1.style.visibility = 'hidden';
//         img2.style.visibility = 'visible';
//     });
    
// });