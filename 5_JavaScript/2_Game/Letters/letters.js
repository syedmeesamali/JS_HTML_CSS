document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    let cards = document.querySelector('.container');
    frontCard = document.querySelectorAll(".card-front"); //This is an array now
    let backCard = document.querySelector('.card-back');
    for (var i=0; i<frontCard.length; i++) {
        frontCard[i].classList.add("hidden");
    }

    //Check for clicks
    let clickToggle = true;
    cards.addEventListener('click', () => {
        console.log("Card clicked");
        if (clickToggle) {
            for (var i=0; i<frontCard.length; i++) {
                frontCard[i].classList.remove("hidden");
            }
            backCard.classList.add("hidden");
            clickToggle = false;
        } else {
            frontCard.classList.add("hidden");
            backCard.classList.remove("hidden");
            clickToggle = true;
        }
        
    })
    

})
