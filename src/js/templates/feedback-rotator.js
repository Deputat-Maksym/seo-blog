if(document.querySelector('.feedback-rotator')) {
  var slider2 = new Glide('.feedback-rotator', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 1
      }
    }
  });

  slider2.on('build.after', function() {
    getSlides()
  });

  slider2.on('move.after', function() {
    getSlides()
  });

  slider2.mount();

  function getSlides() {
    var activeSlide = document.querySelector('.feedback-rotator .glide__slide--active');
    var prev = activeSlide.previousElementSibling.querySelector('.feedback-img img');
    var center = activeSlide.querySelector('.feedback-img img');
    var next = activeSlide.nextElementSibling.querySelector('.feedback-img img');

    setImg(prev);
    setImg(center);
    setImg(next);
  }

  function setImg(slide) {
    var processed = slide.getAttribute('data-processed');
    if(processed === 'false') {
      slide.setAttribute('src', slide.getAttribute('data-src'));
      slide.setAttribute('data-processed', 'true');
    }
  }
};
