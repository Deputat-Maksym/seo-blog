$(document).ready(function () {
  $('.toggle-btn').on('click', function() {
    $('.filter').toggleClass('panel-open')
  });

  $('.filter-list').each(function() {
    var height = $(this).height();
    $(this).css('height', height).addClass('hide-list');
  });

  $('.filter-btn').on('click', function() {
    $('.filter-btn').css('display', 'block');
    $(this).css('display', 'none');
    $('.filter-list').addClass('hide-list');
    $(this).parents('.filter-type-block').find('.filter-list').removeClass('hide-list');
  });

  $(this).on('click', function (e) {
    if (!$('.filter').is(e.target) && $('.filter').has(e.target).length === 0 && $('.filter').hasClass('panel-open')) {
      $('.filter').removeClass('panel-open');
    }
  });
});

