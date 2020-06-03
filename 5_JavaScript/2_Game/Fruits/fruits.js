document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom is loaded!");
    
    //var img1 = new Image();
    var img2 = new Image();
    let img1 = document.querySelector('#fruit-1');
    img2 = img1;
    img2.src = img1.src;

    img1.addEventListener('click', () => {
        console.log("Image 1 original source = " + img1.src);
        img1.style.display = 'none';
        console.log("Image 1 src now = " + img1.src);
    if (img1) {
        img1.src =img2.src;
        img1.style.display = 'hidden';
        //img2.style.display = 'visible';
        console.log("First if Src = " + img2.src);
    } else {
        img1.src = img1.src;
        console.log("Second if Src = " + img1.src);
        
    }
        
    }) 

    var reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        console.log("Reset items");
        let imgCheck = document.querySelector("#fruit-1");
        imgCheck.style.display = 'hidden';
    })


});
