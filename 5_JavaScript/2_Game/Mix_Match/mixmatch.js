//Make sure all assets loaded before we use our JS in the page
if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready());
} else {
        ready();
}

function ready() {
        let overlays = document.getElementsByClassName('overlay-text');
}