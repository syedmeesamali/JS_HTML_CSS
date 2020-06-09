document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    
    //Starting image function
    function startImage() {
        document.getElementById("fruit-1").src = imageArray[0].src;
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