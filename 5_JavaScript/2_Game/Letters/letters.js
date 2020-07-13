document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    let cards = document.querySelector('.flip-card');
    let frontCard = document.querySelector('.flip-card-front');
    let backCard = document.querySelector('.flip-card-back');
    

    //Check for clicks
    let clickToggle = true;
    cards.addEventListener('click', () => {
        console.log("Card clicked");
        if (clickToggle) {
            frontCard.classList.add("hidden");
            backCard.classList.remove("hidden");
            clickToggle = false;
        } else {
            frontCard.classList.remove("hidden");
            backCard.classList.add("hidden");
            clickToggle = true;
        }
        
    })
    

})
