document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    let cards = document.querySelector('.flip-card');
    let innerCard = document.querySelector('.flip-card-inner');
    

    //Check for clicks
    let clickToggle = true;

    cards.addEventListener('click', () => {
        console.log("Card clicked");
        if (clickToggle) {
            innerCard.classList.add("hidden");
            clickToggle = false;
        } else {
            innerCard.classList.remove("hidden");
            clickToggle = true;
        }
        
    })
    

})
