//Variables
const tweetList = document.getElementById('tweet-list');

//Even Listeners
eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);
    tweetList.addEventListener('click', removeTweet);
}

//Functions
function newTweet(e) {
    e.preventDefault();

    const tweet = document.getElementById('tweet').value;
    //Create a remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = "X";

    //Create an <li> element to save and dispaly tweets
    const li = document.createElement('li');
    li.textContent = tweet;
    
    //Add remove button to each tweet
    li.appendChild(removeBtn);
    tweetList.appendChild(li);
    //Add the tweet to local storage
    tweetsToStorage(tweet);
}

//Function to remove a tweet
function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 
}

//Add tweets to the local storage
function tweetsToStorage(e) {
    console.log("Hello from local storage function");
}

//This function will retrieve tweets from localstorage
function getTweetsFromStorage() {
    let tweets;
    //Get the values, if null is returned then create empty array
    if (localStorage.getItem('tweets') == null) {
        tweets = [];
    }
}