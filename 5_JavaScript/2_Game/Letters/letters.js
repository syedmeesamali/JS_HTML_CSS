document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    doStuff();
    //window.onload = doStuff;
    function doStuff() {
        console.log("Window content loaded");
        let cards = Array.from(document.getElementsByClassName('card'));
        cards.forEach(card => {
                card.addEventListener('click', () => {
                    if (!card.classList.contains('card-back')) {
                        card.classList.remove('card-front');
                        card.classList.add('card-back');
                    } else {
                        card.classList.add('card-front');
                        card.classList.remove('card-back');
                    }
                })
        })
    } //End of do stuff function
})
