window.addEventListener('load', function(e) {
  var commercBox = document.querySelector('.sidebar-commerc'),
      commercBoxPosition = commercBox.offsetTop,
      sideBarBottom = document.querySelector('.sidebar');

  if (window.matchMedia("(min-width: 1091px)").matches) {
    window.addEventListener('scroll', fixingBlock)
  } else {
    removeEventListener('scroll', fixingBlock)
  }

  window.addEventListener('resize', function() {
    if (window.matchMedia("(min-width: 1091px)").matches) {
      window.addEventListener('scroll', fixingBlock)
    } else {
      removeEventListener('scroll', fixingBlock)
    }
  });

  function fixingBlock() {
    if(pageYOffset >= commercBoxPosition && sideBarBottom.getBoundingClientRect().bottom > commercBox.clientHeight) {
      commercBox.classList.add('fixed-top');
    } else {
      commercBox.classList.remove('fixed-top');
    }
  }
});


