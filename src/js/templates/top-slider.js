if(document.querySelector('.top-slider')) {
  var slider1 = new Glide('.top-slider', {
    // type: 'carousel',
    perView: 1,
    autoplay: 3000
  });

  slider1.on('mount.before', function() {
    var rounds = document.querySelectorAll('.top-slider .slider-item'),
        bullets = document.querySelector('.top-slider .glide__bullets');

    for(var i = 0; i < rounds.length; i += 1) {
      bullets.insertAdjacentHTML('beforeend', '<button class="glide__bullet" data-glide-dir="=' + i + '"></button>');
    }
  });

  slider1.on('build.after', function() {
    setCurrentImg();
  });

  slider1.on('move.after', function() {
    setCurrentImg();
  });

  slider1.mount();

  function setCurrentImg() {
    var activeSlide = document.querySelector('.top-slider .glide__slide--active img'),
        processed = activeSlide.getAttribute('data-processed');

    if(processed === 'false') {
      activeSlide.setAttribute('src', activeSlide.getAttribute('data-src'));
      activeSlide.setAttribute('data-processed', 'true');
    }
  }
};

