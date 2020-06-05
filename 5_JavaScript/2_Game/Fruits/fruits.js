document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom is loaded!");
    var isSwap = true;
    let img1 = document.querySelector('#fruit-1');
    img1.addEventListener('click',swap());
    function swap () {
        if (isSwap) {
            document.querySelector('#fruit-1').src = "img/apple.png";
            isSwap = false;
            console.log("First if");
        } else {
            document.querySelector('#fruit-1').src = "img/letter-a.png";
            isSwap = true;
            console.log("Else if");
        }
        console.log("At end");
    }     
}) 