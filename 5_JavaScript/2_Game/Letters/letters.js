class AudioController {
    constructor() {
            this.flipAudio = new Audio('assets/flip.wav');
    }
    flip() {   this.flipAudio.play();      }
 }

document.addEventListener('DOMContentLoaded', () => {
    doStuff();
    function doStuff() {
        let cards = Array.from(document.getElementsByClassName('card-face'));
        cardFirst = false
        cards.forEach(card => {
            let audioController = new AudioController();
                card.addEventListener('click', () => {
                    console.log("Card class:" + card.classList);
                    if(!cardFirst) {
                        card.classList.add("opClass");
                        audioController.flip();
                        console.log("Card class:" + card.classList);
                        cardFirst = true;
                    } else {
                        card.classList.remove("opClass");
                        audioController.flip();
                        console.log("Card class:" + card.classList);
                        cardFirst = false;
                    }
                 })
        }) //End of foreach
    
    } //End of do stuff function
})
