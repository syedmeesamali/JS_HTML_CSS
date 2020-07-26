class AudioController {
        constructor() {
                this.bigMusic = new Audio('Assets/Audio/creepy.mp3');
                this.flipAudio = new Audio('Assets/Audio/flip.wav');
                this.matchSound = new Audio('Assets/Audio/match.wav');
                this.victorySound = new Audio('Assets/Audio/victory.wav');
                this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
                this.bigMusic.volume = 0.5;
                this.bigMusic.loop = true;
        }
        startMusic() {   this.bigMusic.play();   }
        stopMusic() {
                this.bigMusic.pause();
                this.bigMusic.currentTime = 0;
        }
        flip() {   this.flipAudio.play();      }
        match () { this.matchSound.play();     }
        victory() {       this.stopMusic();
                          this.victorySound.play();   }
        gameOver() {      this.stopMusic();
                          this.gameOverSound.play();  }
}

//Just the audio player playing only
function audioPlayer() {
        console.log("Button clicked");
        let audioController = new AudioController();
        audioController.startMusic();
}

class MixOrMatch {
        constructor(totalTime, Cards) {
                this.cardsArray = cards;
                this.totalTime = totalTime;
                this.timeRemaining = totalTime;
                this.timer = document.getElementById('time-remaining');
                this.ticker = document.getElementById('flips');
                this.audioController = new AudioController();
        }
        startGame() {
                this.cardToCheck = null;
                this.totalClicks = 0;
                this.timeRemaining = this.totalTime;
                this.matchedCards = [];
        }
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
                        let audioController = new AudioController();
                        audioController.flip();
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