document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");

    let cardContainer = document.querySelectorAll(".flip-card");
    cardContainer.addEventListener('click', flipCard(cardContainer));
    
    function flipCard(cardContainer) {
        console.log("Clicked inside!");
        console.log(cardContainer);
        cardContainer.style.transform = "rotatey(180deg)";
        cardContainer.style.transitionDuration = "1.5s";
    }
})
