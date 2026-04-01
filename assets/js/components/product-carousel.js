(function () {
  var slides  = document.querySelectorAll(".product-carousel__slide");
  var thumbs  = document.querySelectorAll(".product-carousel__thumb");
  var counter = document.querySelector(".product-carousel__counter");
  var prev    = document.querySelector(".product-carousel__arrow--prev");
  var next    = document.querySelector(".product-carousel__arrow--next");

  if (!slides.length) return;

  var current = 0;
  var total   = slides.length;

  function goTo(index) {
    slides[current].classList.remove("is-active");
    thumbs[current].classList.remove("is-active");

    current = (index + total) % total;

    slides[current].classList.add("is-active");
    thumbs[current].classList.add("is-active");

    if (counter) counter.textContent = (current + 1) + "/" + total;

    // Atualiza src de todos os thumbnails para recortes da nova imagem ativa
    var newSrc = slides[current].src;
    thumbs.forEach(function (thumb) {
      thumb.querySelector("img").src = newSrc;
    });
  }

  if (prev) prev.addEventListener("click", function () { goTo(current - 1); });
  if (next) next.addEventListener("click", function () { goTo(current + 1); });

  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      goTo(parseInt(thumb.dataset.index, 10));
    });
  });
})();
