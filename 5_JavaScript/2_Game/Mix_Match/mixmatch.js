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

function audioPlayer() {
        console.log("Button clicked");
        let audioController = new AudioController();
        audioController.startMusic();
}


window.onload = doStuff;
function doStuff() {
        console.log("Window content loaded");
        const myBtn = document.querySelector("button");

        myBtn.addEventListener('click', audioPlayer);
}

/*
//Main document ready function
function ready() {
        console.log("Loaded Now !");
        var myBtn = document.getElementById("myBtn");
        console.log(myBtn);
}


//Make sure all assets loaded before we use our JS in the page
if(document.readyState === 'loading') {
        console.log("Loading ....");
        document.addEventListener('DOMContentLoaded', ready());
} else {
        ready();
} */