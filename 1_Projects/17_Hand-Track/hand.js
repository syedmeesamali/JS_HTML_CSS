navigator.getUserMedia = 
    navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

const video = document.querySelector('#video');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const audio = document.querySelector('#audio');
let model;

handTrack.startVideo(video).then(status => {
    if (status) {
        navigator.getUserMedia({ video: {}}, stream => { 
            video.srcObject = stream;
            setInterval(runDetection, 1000);
        }, err => console.error(err)) 
    }
})

function runDetection() {
    model.detect(video).then(predictions => {
        //model.renderPredictions(predictions, canvas, context, video); //Will really slow down
        if(predictions.length > 0) {
            audio.play();
        }
    });
}


handTrack.load().then(lmodel => {
    model = lmodel;
});