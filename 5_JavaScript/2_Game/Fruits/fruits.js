document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom is loaded!");
    var isSwap = true;
    let img1 = document.querySelector('#fruit-1');
    let img2 = document.querySelector('#fruit-5');
    img2.addEventListener('click', () => {
        console.log("Image src = " + img1.src);
        img2.style.visibility = 'hidden';
        img1.style.visibility = 'visible';
    });
    img1.addEventListener('click', () => {
        console.log("Image src = " + img1.src);
        img1.style.visibility = 'hidden';
        img2.style.visibility = 'visible';
    });
    
});