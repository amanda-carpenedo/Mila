(function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var closeBtn = document.getElementById('lightbox-close');
  var prevBtn = document.getElementById('lightbox-prev');
  var nextBtn = document.getElementById('lightbox-next');

  // Coleta apenas itens com imagem (exclui placeholder e wide se necessário)
  var items = Array.from(document.querySelectorAll('.gallery-page__item img, .gallery-page__item--wide img'));
  var currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    var img = items[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    lightboxImg.src = items[currentIndex].src;
    lightboxImg.alt = items[currentIndex].alt;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    lightboxImg.src = items[currentIndex].src;
    lightboxImg.alt = items[currentIndex].alt;
  }

  // Abre ao clicar em qualquer imagem do grid
  items.forEach(function (img, index) {
    img.style.cursor = 'pointer';
    img.parentElement.addEventListener('click', function () {
      openLightbox(index);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Fechar com Escape, navegar com setas do teclado
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Fechar ao clicar no fundo branco (fora da imagem)
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
})();
