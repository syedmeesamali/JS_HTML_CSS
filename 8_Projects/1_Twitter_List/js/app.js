//Variables
const tweetList = document.getElementById('tweet-list');

//Even Listeners
eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);

}

//Functions
function newTweet(e) {
    e.preventDefault();

    const tweet = document.getElementById('tweet').value;
    //Create a remove button
    
    console.log(tweet);

    //Create an <li> element to save and dispaly tweets
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

}