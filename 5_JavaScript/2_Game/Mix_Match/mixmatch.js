//Make sure all assets loaded before we use our JS in the page
if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready());
} else {
        ready();
}

function ready() {
        console.log("Dom loaded now!");
        let overlays = Array.from(document.getElementsByClassName('overlay-text'));  //Create array from HTML elements
        let cards = Array.from(document.getElementsByClassName('card'));

        //Add functionality to the overlay-texts
        overlays.forEach(overlay => {
                overlay.addEventListener('click', () => {
                        console.log("Overlay clicked!");
                        overlay.classList.remove('visible');
                })
        })

        cards.forEach(card => { 
                card.addEventListener('click', () => {
                        console.log("Clicked!");
                })
        })
}