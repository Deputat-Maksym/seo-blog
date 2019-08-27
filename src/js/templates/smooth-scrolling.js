$(document).ready(function () {
  $(".smooth-scrl").on("click", function( event ){
    event.preventDefault();
    var id = $( this ).attr('href'),
        top = $( id ).offset().top;
    $('body,html').animate( {scrollTop: top}, 500);
  });

  $('#scrollToTopButton').on('click', function(e) {
    e.preventDefault();
    $('body,html,.parallax').animate( {scrollTop: 0}, 500);
  });

  $(document).on('scroll', function() {
    if($(this).scrollTop() >= 100) {
      $('#scrollToTopButton').css('display', 'block')
    } else {
      $('#scrollToTopButton').css('display', 'none')
    }
  });

  $('.parallax').on('scroll', function() {
    if($(this).scrollTop() >= 100) {
      $('#scrollToTopButton').css('display', 'block')
    } else {
      $('#scrollToTopButton').css('display', 'none')
    }
  });
});

