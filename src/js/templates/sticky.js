// window.addEventListener('load', function(e) {


  var commercBox = document.querySelector('.sidebar-commerc');

// });

window.addEventListener('scroll', function() {
  commercBox.innerHTML = pageYOffset + 'px';
});

