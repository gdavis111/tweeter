/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function timeSince(now, date) { // Used to log the time since posted in the bottom left corner of each tweet
  var seconds = Math.floor(now - date) / 1000;
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {  // if statement to determine whether to specify time in seconds/minutes/hours etc
    return interval + " years ago"; // will return months until timeSince reaches 2 years
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

function escape(str) { // users cannot manipulate html when this function is called on input area
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function createTweetElement(tweet) {  // Creates entire html structure to be styled by pre-existing css
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
                      <p class="timeStamp">${escape(timeSince(Date.now(), tweet.created_at))}</p>
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
  tweets.forEach(function(tweet) {
    const createdTweet = createTweetElement(tweet);
    $('.printed-tweet').prepend(createdTweet);
    console.log(createdTweet);
  });
}

$(document).ready(function() { // runs when document is ready (kind of self explained)

  $( ".compose" ).click(function() { // toggles tweet input form
      $('.new-tweet').slideToggle()
      $('.new-tweet textarea').select(); // when toggled the text area is auto-selected for the user
  });

  $('#new-tweet').on('submit', function(ev) {
    ev.preventDefault()
    let tweetLength = $('#new-tweet textarea').val().length;
    if (tweetLength > 140) {  // checks to make sure tweet is not over max length
      alert('You must keep your tweet below 140 characters!')
    } else if (tweetLength <= 0) {  // checks to make sure tweet is not empty
      alert('You must enter something to tweet about!')
    } else {  // allows
      $('.counter').text(140);
      let formData = $('#new-tweet').serialize();
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: formData,
        success: function(result) {
          $('.new-tweet form textarea').val('');
          loadTweets();
        }
      });
    }
  });

  function loadTweets() { // loads tweets on document ready
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
