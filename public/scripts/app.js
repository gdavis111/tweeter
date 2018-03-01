/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function createTweetElement(tweet) {
  let $tweet = `<article class="tweet">
                    <header>
                    <img class="avatar-pic" src="${escape(tweet.user.avatars.small)}">
                    <h2>${escape(tweet.user.name)}</h2>
                    <p class="tag">${escape(tweet.user.handle)}</p>
                  </header>
                  <div class="tweet-text">
                    <p>${escape(tweet.content.text)}</p>
                  </div>
                  <footer class="footer">
                    <div class="date">
                      <p class="timeStamp">${escape(tweet.created_at)}</p>
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
    console.log(createdTweet);
  });
}

$(document).ready(function() {

  $( ".compose" ).click(function() {
      $('.new-tweet').slideToggle()
      $('.new-tweet textarea').select();
  });

  $('#new-tweet').on('submit', function(ev) {
    ev.preventDefault()
    let tweetLength = $('#new-tweet textarea').val().length;
    if (tweetLength > 140) {  // checks to make sure tweet is not over max length
      alert('You must keep your tweet below 140 characters!')
    } else if (tweetLength <= 0) {  // checks to make sure tweet is not empty
      alert('You must enter something to tweet about!')
    } else {  // allows
      let formData = $('#new-tweet').serialize();
      $.ajax({
        url: "/tweets", // Figure out what this means / if its right
        method: "POST",
        data: formData,
        success: function(result) {
          $('.new-tweet form textarea').val('');
          loadTweets();
        }
      });
    }
  });

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (data) {
        $('.printed-tweet').empty();
        renderTweets(data);
      }
    });
  }
  loadTweets();
});
