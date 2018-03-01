$(document).ready(function() { // function to count down (or up) on the character limit based on user input
  $('.new-tweet form textarea').on('keyup', function() {
    var count = $('.counter');
    var characters = $(this).val().length;
    var maxChars = 140;
    count.text(maxChars - characters);
    if (characters > maxChars) {
      count.addClass('overMax');  // if over the character limit, text turns red
    } else {
      count.removeClass('overMax');
    }
  });
});
