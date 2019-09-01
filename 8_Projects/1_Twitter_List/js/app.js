//Variables
const tweetList = document.getElementById('tweet-list');

//Even Listeners
eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);
    tweetList.addEventListener('click', removeTweet);
    document.addEventListener('DOMContentLoaded', localStorageonLoad)
}

//Functions
function newTweet(e) {
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    const removeBtn = document.createElement('a'); //Create a remove button
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = "X";

    const li = document.createElement('li'); //Li to save and display the tweets
    li.textContent = tweet;
    li.appendChild(removeBtn); //Add remove button to each tweet
    tweetList.appendChild(li);
    addTweetLocalStorage(tweet);    //Add the tweet to local storage
}

//Function to remove a tweet
function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 
    //Remove the tweet from storage as well
    console.log(e.target.parentElement.textContent);
    removeTweetLocalStorage();
}

//Add tweets to the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();
    tweets.push(tweet);
    //Convert array to string and add to local storage
    localStorage.setItem('tweets', JSON.stringify( tweets ));
}

//This function will retrieve tweets from localstorage
function getTweetsFromStorage() {
    let tweets;
    const tweetLS = localStorage.getItem('tweets');

    //Get the values, if null is returned then create empty array
    if (tweetLS == null) {
        tweets = [];
    } else {
        tweets = JSON.parse( tweetLS );
    }
    return tweets;
}

//Print localstorage tweets
function localStorageonLoad() {
    let tweets = getTweetsFromStorage();
    console.log(tweets);
    //Loop through storage and print the values
    tweets.forEach(function(tweet){
        const removeBtn = document.createElement('a'); //Create a remove button
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = "X";
        const li = document.createElement('li'); //Li to save and display the tweets
        li.textContent = tweet;
        li.appendChild(removeBtn); //Add remove button to each tweet
        tweetList.appendChild(li);
    });
}

function removeTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();
    
}