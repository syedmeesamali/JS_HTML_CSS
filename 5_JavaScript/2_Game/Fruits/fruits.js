document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom is loaded!");
    
    var img1 = new Image();
    var img2 = new Image();
    img1 = document.querySelector('#fruit-1');
    img2 = document.querySelector('#fruit-1');
    img1.src = './img/apple.png';
    img2.src = './img/letter-a.png';

    //var img = document.querySelector("#fruit-1");
    img1.addEventListener('click', () => {
    console.log("First Image source: " + img1.src);
    if (img1) {
        img1.src =img2.src;
        console.log("First if");
        console.log("Src = " + img2.src);
    } else {
        img1.src = img1.src;
        console.log("Else if");
        console.log("Src = " + img1.src);
        
    }
        
    }) 

    var reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        console.log("Reset items");
        document.querySelector("#fruit-1").src = './img/letter-a.png';
        console.log("Src = " + document.querySelector("#fruit-1").src);
    })


});
