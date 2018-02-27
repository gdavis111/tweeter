$(document).ready(function() {
  $('.new-tweet form textarea').on('keyup', function() {
    var count = $('.counter'); // bad practice?
    var characters = $(this).val().length;
    var maxChars = 140;
    count.text(maxChars - characters);
    if (characters > maxChars) {
      count.addClass('overMax');
    } else {
      count.removeClass('overMax');
    }
  });
  console.log("Page has loaded I think!")
});
