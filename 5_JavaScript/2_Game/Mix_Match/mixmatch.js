//Main document ready function
function ready() {
        console.log("Loaded Now !");
        var myBtn = document.getElementById("myBtn");
        myBtn.addEventListener("click", alert("hell world"));


        function audioPlayer() {
                console.log("Button clicked");
                let audioController = new AudioController();
                audioController.startMusic();
        }
                
        const overLayTotal = document.getElementsByClassName('card');
        overLayTotal.forEach((ele, index) => {
        ele.addEventListener('click', (e) => {
                console.log(index, ele);
        })
})

var overlays = Array.from(overLayTotal);  //Create array from HTML elements
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
        console.log("Loading ....");
        document.addEventListener('DOMContentLoaded', ready());
} else {
        console.log("DOM loaded");
        ready();
}