document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom is loaded!");
    
    var img = document.querySelector("#fruit-1");
    img.addEventListener('click', () => {
    var img1 = document.querySelector("#fruit-1").src;
    console.log("Image 1 clicked");
    if (img1) {
        document.querySelector("#fruit-1").src = 'img/apple.png';
        console.log("First if");
        console.log("Src = " + document.querySelector("#fruit-1").src);
    } else if (!img1) {
        document.querySelector("#fruit-1").src = 'img/letter-a.png';
        console.log("Else if");
        console.log("Src = " + document.querySelector("#fruit-1").src);
    }
        
    }) 

    var reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        console.log("Reset items");
        document.querySelector("#fruit-1").src = './img/letter-a.png';
        document.querySelector("#fruit-1").style.visibility = 'hidden';
    })


});
