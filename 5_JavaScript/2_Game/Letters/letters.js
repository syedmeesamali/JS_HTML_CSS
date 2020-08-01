document.addEventListener('DOMContentLoaded', () => {
    doStuff();
    function doStuff() {
        let cards = Array.from(document.getElementsByClassName('card-face'));
        cards.forEach(card => {
                card.addEventListener('click', () => {
                    console.log("Card class:" + card.classList);
                    if (card.classList.contains('visible')) {
                        card.classList.remove('visible');
                        card.classList.add('hidden');
                        console.log("Card class:" + card.classList);
                    } else {
                        card.classList.add("card-back","card-face", "visible");
                        console.log("Card class:" + card.classList);
                    } 
                 })
        })
    } //End of do stuff function
})
