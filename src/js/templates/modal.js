var btnModalOpen = document.querySelectorAll('.modal-show'),
    modalWindow = document.querySelector('.modal'),
    modalInnerLayer = document.querySelector('.modal-inner-layer');

for(var b = 0; b < btnModalOpen.length; b += 1) {
  btnModalOpen[b].addEventListener('click', function() {
    modalWindow.classList.add('modal-open')
  });
}

modalInnerLayer.addEventListener('click', function() {
  modalWindow.classList.remove('modal-open')
});




