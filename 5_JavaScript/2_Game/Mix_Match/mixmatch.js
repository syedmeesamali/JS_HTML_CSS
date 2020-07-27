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
                this.busy = true;
        }
        flipCard(card) {
                if(this.canFlipCard(card)) {
                        this.audioController.flip();
                        this.totalClicks++;
                        this.ticker.innerText = this.totalClicks;
                        card.classList.add('visible');
                        //Main if statement and checks
                }
        }
        shuffleCards() {
                for (let i = this.cardsArray.length - 1; i > 0; i--) {
                        let randIndex = Math.floor(Math.random() * (i + 1));
                        this.cardsArray[i].style.order = i;
                        this.cardsArray[i].style.order = randIndex;
                }
        }
        canFlipCard(card) {
                return true;
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