window.addEventListener('load', function(e) {

  function hideExcessiveBlocks(block, count) {
      for(var i = count; i < block.length; i += 1) {
        block[i].classList.toggle('block-hidden');
      }
  }

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


  // const list = ['JavaScript', 'Kotlin', 'Rust', 'PHP', 'Ruby', 'Java', 'MarkDown', 'Python', 'C++', 'Fortran', 'Assembler'];
  //
  // const result = document.getElementById('results');
  //
  // renderList(list, result);
  //
  // function filter(val, _list) {
  //   return _list.filter(it => it.indexOf(val) !== -1);
  // }
  //
  // function renderList(_list = [], el = document.body) {
  //   el.innerHTML = _list.map(item => `<li>${item}/li>`);
  // }
  //
  // document.getElementById('search').addEventListener('input', e => {
  //   console.time('test');
  //   renderList(filter(e.target.value, list), result);
  //   console.timeEnd('test');
  // });
});


