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
        stopMusic() {
                this.bigMusic.pause();
                this.bigMusic.currentTime = 0;
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

        cards.forEach(card => {
                card.addEventListener('click', () => {

                })
        })
        const myBtn = document.querySelector("button");
        let musicOff = true;
        myBtn.addEventListener('click', () => {
                if(musicOff === true) {
                        let audioController = new AudioController();
                        audioController.startMusic();   
                        musicOff = false;
                } else {
                        let audioController = new AudioController();
                        audioController.stopMusic();
                        musicOff = true;
                }
        });
}