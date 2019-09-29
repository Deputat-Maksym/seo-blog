if(document.querySelector('.feedback-rotator')) {
  var slider2 = tns({
    container: '.feedback-rotator',
    items: 3,
    autoplay: false,
    gutter: 30,
    // controls: false,
    lazyload: true,
    mouseDrag: true,
    navPosition: 'bottom',
    controlsText: ['<', '>'],
    // center: true
  });

  changeCenterSlide();

  slider2.events.on('indexChanged', changeCenterSlide);

  function changeCenterSlide() {
    var slides = document.querySelectorAll('.feedback-rotator .tns-slide-active');
    slides[0].classList.remove('slide-center');
    slides[1].classList.add('slide-center');
    slides[2].classList.remove('slide-center');
  }
};
