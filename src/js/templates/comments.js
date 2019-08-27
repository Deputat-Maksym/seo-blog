$(document).ready(function () {
  var textArea = $('.comments-area .comment-form-comment');
  textArea.addClass('icon-edit');

  $('textarea')
    .focus(function() {
      textArea.addClass('icon-edit-hide');
    })
    .blur(function() {
      if ($(this)[0].value == '') {
        textArea.removeClass('icon-edit-hide');
      }
    });
});