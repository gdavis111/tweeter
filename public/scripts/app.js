/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(tweet) {
  //let $tweet = $('<article>').addClass('tweet');
  let $tweet = `<article class="tweet">
                    <header>
                    <img class="avatar-pic" src="${tweet.user.avatars.small}">
                    <h2>${tweet.user.name}</h2>
                    <p class="tag">${tweet.user.handle}</p>
                  </header>
                  <div class="tweet-text">
                    <p>${tweet.content.text}</p>
                  </div>
                  <footer class="footer">
                    <div class="date">
                      <p class="timeStamp">${tweet.created_at}</p>
                    </div>
                    <div>
                      <img class="bottomLinks" src="/images/tweetLike.png">
                      <img class="bottomLinks" src="/images/tweetRetweet.png">
                      <img class="bottomLinks" src="/images/tweetFlag.png">
                    </div>
                  </footer>
                </article>`

 return $tweet;
}

function renderTweets(tweets) { // uses createTweetElement to turn each object into a tweet
  tweets.forEach(function(tweet) { //
    const createdTweet = createTweetElement(tweet);
    $('.printed-tweet').prepend(createdTweet);
  });
}

$(document).ready(function() {
   renderTweets(data);
});