window.addEventListener('load', function(e) {

  function hideExcessiveBlocks(block, count) {
      for(var i = count; i < block.length; i += 1) {
        block[i].classList.toggle('block-hidden');
      }
  }

  // function

  var questBlock = document.querySelectorAll('.faq-quest-block');
  for(var a = 0; a < questBlock.length; a += 1) {
    var blockInner = questBlock[a].querySelectorAll('.faq-quest-single'),
        childsLength = +questBlock[a].getAttribute('data-counter'),
        moreBtn = questBlock[a].querySelector('.more-arrow');
    if (blockInner.length > childsLength) {
      hideExcessiveBlocks(blockInner, childsLength);
      moreBtn.style.display = 'block';

      moreBtn.addEventListener('click', function() {
        this.classList.toggle('arrow-rot');
        var moreBtnParent = this.parentElement,
            childsInnerLength = +moreBtnParent.getAttribute('data-counter');
            childsInner = moreBtnParent.querySelectorAll('.faq-quest-single');
        hideExcessiveBlocks(childsInner, childsInnerLength);
      })
    }
  }

  //--- Serching ---//
  // var searchInput = document.querySelector('.faq-search-input');
  // searchInput.addEventListener('input', filterQuest);
  //
  // function filterQuest() {
  //   var inputVal = this.value.trim();
  //
  //   console.log(inputVal);
  //

  // }

});


