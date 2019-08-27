$(document).ready(function () {
  var galleryObj = [];

  $('.imgs-cont img').each(function() {
    var src = $(this).attr('data-img-c');

    galleryObj.push({
      src: src
    })
  });

  $('.gallery-open').on('click', function() {
    $.fancybox.open(galleryObj)
  });

  ///////////////////////////////////////////////////////////

  // var debounce = function(func, wait, immediate) {
  //   var timeout;
  //   return function() {
  //     var context = this, args = arguments;
  //     var later = function() {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };
  //
  // window.addEventListener('resize', debounce(imgWidthCalc,
  //     300, false), false);
  //
  // window.addEventListener('orientationchange', imgWidthCalc, false);

});
