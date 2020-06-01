document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom is loaded");
    var img1 = document.querySelector('#fruit-1');
    img1.addEventListener('click', () => {
        console.log("Image 1 clicked");
    if (img1.src == "URL('./img/apple.png')") {
        img1.src == "URL('./img/letter-a.png')";
        console.log("Here now!");
    } else {
        img1.src == "URL('./img/apple.png')";
        console.log("Came here!");
    }
        
    }) 

})
