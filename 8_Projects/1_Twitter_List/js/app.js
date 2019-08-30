//Variables




//Even Listeners
eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);

}



//Functions
function newTweet(e) {
    e.preventDefault();

    const tweet = document.getElementById('tweet').value;
    console.log(tweet);
}