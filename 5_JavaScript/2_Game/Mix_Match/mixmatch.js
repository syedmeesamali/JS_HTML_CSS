class AudioController {
        constructor() {
                this.bigMusic = new Audio('Assets/Audio/creepy.mp3');
                this.flipAudio = new Audio('Assets/Audio/flip.wav');
                this.matchSound = new Audio('Assets/Audio/match.wav');
                this.victorySound = new Audio('Assets/Audio/victory.wav');
                this.gameOver = new Audio('Assets/Audio/gameOver.wav');
                this.bigMusic.volume = 0.5;
                this.bigMusic.loop = true;
        }
        startMusic() {
                this.bigMusic.play();           //Play the sound method
        }
}


//Make sure all assets loaded before we use our JS in the page
if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready());
} else {
        ready();
}

//Main document ready function
function ready() {
        console.log("Dom loaded now!");
        var overlays = Array.from(document.getElementsByClassName('overlay-text'));  //Create array from HTML elements
        var cards = Array.from(document.getElementsByClassName('card'));
        console.log(cards[0]);
        
        overlays.forEach(overlay => {
                overlay.addEventListener('click', () => {
                        console.log("Overlay clicked!");
                        overlay.classList.remove('visible');
                        let audioController = new AudioController();
                        audioController.startMusic();
                })
        })
        cards.forEach(card => { 
                card.addEventListener('click', () => {
                        console.log("Clicked!");
                })
        })
}