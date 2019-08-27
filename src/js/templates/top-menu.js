$(document).ready(function () {
  var $main_nav = $('#main-nav');
  var $toggle = $('.toggle');

  var defaultData = {
    maxWidth: false,
    customToggle: $toggle,
    levelTitles: true,
    insertClose: 2,
    closeLevels: false
  };

  $main_nav.hcOffcanvasNav(defaultData);

  $('.nav-parent > a').each(function(index) {
    var hrefLink = $(this).attr('href');

    $('.category-link').eq(index).attr('href', hrefLink);
  })
});

