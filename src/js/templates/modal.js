var btnModalOpen = document.querySelector('.modal-show'),
    modalWindow = document.querySelector('.modal'),
    modalInnerLayer = document.querySelector('.modal-inner-layer');

btnModalOpen.addEventListener('click', function() {
  modalWindow.classList.add('modal-open')
});

modalInnerLayer.addEventListener('click', function() {
  modalWindow.classList.remove('modal-open')
});




