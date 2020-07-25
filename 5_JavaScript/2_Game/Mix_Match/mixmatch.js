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

//Just the audio player playing only
function audioPlayer() {
        console.log("Button clicked");
        let audioController = new AudioController();
        audioController.startMusic();
}


window.onload = doStuff;
function doStuff() {
        console.log("Window content loaded");
        let overlays = Array.from(document.getElementsByClassName('overlay-text'));
        let cards = Array.from(document.getElementsByClassName('card'));
        overlays.forEach(overlay => {
                overlay.addEventListener('click', () => {
                        overlay.classList.remove('visible');
                })
        })
        const myBtn = document.querySelector("button");
        myBtn.addEventListener('click', audioPlayer);
}