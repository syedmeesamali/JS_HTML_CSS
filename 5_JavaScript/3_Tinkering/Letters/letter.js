document.addEventListener('DOMContentLoaded', () => {
    console.log("Data loaded");
    let cards = Array.from(document.getElementsByClassName('card'));
    console.log(cards[0]);
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log("Card clicked");
            if (!card.classList.contains('card-back')) {
                card.classList.remove('card-front');
                card.classList.add('card-back');
            } else {
                card.classList.add('card-front');
                card.classList.remove('card-back');
            }
        })
    });
})
