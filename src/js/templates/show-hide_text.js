$(document).ready(function () {
  $('.show-hide-block').each(function (index) {
    var textBlock = $(this).find('.show-hide-cont'),
        textBlockSize = textBlock.height(),
        fullBlock = $(this);

    if(textBlockSize > 170) {
      fullBlock.find('.btn-toggle').css('display', 'block');
      textBlock.css('height', '170px');
      textBlock.addClass('show-cont')
    };

    fullBlock.find('.btn-toggle').on('click', function () {
      $(this).toggleClass('switching-cont');
      if($(this).hasClass('switching-cont')) {
        textBlock.css('height', textBlockSize + 'px')
      } else {
        textBlock.css('height', '170px')
      }
    });
  });
});