document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    doStuff();
    //window.onload = doStuff;
    function doStuff() {
        console.log("Window content loaded");
        let cards = Array.from(document.getElementsByClassName('card'));
        cards.forEach(card => {
                card.addEventListener('click', () => {
                    console.log("Card clicked"); 
                    card.classList.toggle("card-back");
                })
        })
    } //End of do stuff function
})
