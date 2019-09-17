var btnModalOpen = document.querySelectorAll('.modal-show'),
    btnModalClose = document.querySelector('.modal-close'),
    modalWindow = document.querySelector('.modal'),
    modalInnerLayer = document.querySelector('.modal-inner-layer'),
    htmlBlock = document.querySelector('html');

for(var b = 0; b < btnModalOpen.length; b += 1) {
  btnModalOpen[b].addEventListener('click', function() {
    modalWindow.classList.add('modal-open');
    htmlBlock.style.overflow = 'hidden';
  });
}

modalInnerLayer.addEventListener('click', function() {
  modalWindow.classList.remove('modal-open');
  htmlBlock.style.overflow = 'visible';
});

btnModalClose.addEventListener('click', function() {
  modalWindow.classList.remove('modal-open');
  htmlBlock.style.overflow = 'visible';
});




