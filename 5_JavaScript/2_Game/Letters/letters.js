document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    let cards = document.querySelector('.container');
    frontCard = document.querySelectorAll(".card-front"); //This is an array now
    backCard = document.querySelectorAll('.card-back');
    for (var i=0; i<frontCard.length; i++) {
        frontCard[i].classList.remove("hidden");
        backCard[i].classList.add("hidden");
    }
    

    //Check for clicks
    let clickToggle = true;
    cards.addEventListener('click', () => {
        console.log("Card clicked");
        if (clickToggle) {
            for (var i=0; i<frontCard.length; i++) {
                frontCard[i].classList.add("hidden");
                backCard[i].classList.remove("hidden");
            }
            clickToggle = false;
        } else {
            for (var i=0; i<frontCard.length; i++) {
                frontCard[i].classList.remove("hidden");
                backCard[i].classList.add("hidden");
            }
            clickToggle = true;
        }
        
    })
    

})
