(function () {
  var slides  = document.querySelectorAll(".product-carousel__slide");
  var thumbs  = document.querySelectorAll(".product-carousel__thumb");
  var counter = document.querySelector(".product-carousel__counter");
  var prev    = document.querySelector(".product-carousel__arrow--prev");
  var next    = document.querySelector(".product-carousel__arrow--next");

  if (!slides.length) return;

  var current = 0;
  var total   = slides.length;

  // Abre direto na pintura indicada pela URL (?id=N)
  var params  = new URLSearchParams(window.location.search);
  var startId = parseInt(params.get("id"), 10);
  if (!isNaN(startId) && startId >= 0 && startId < total) {
    current = startId;
  }

  function updateTitle() {
    var name = "Paint " + (current + 1);
    var titleEl = document.querySelector(".product-page__title");
    if (titleEl) titleEl.textContent = name;
    document.title = name + " — Mila | Skin & Colour";
  }

  function updateThumbs() {
    var newSrc = slides[current].src;
    thumbs.forEach(function (thumb) {
      thumb.querySelector("img").src = newSrc;
    });
  }

  function goTo(index) {
    slides[current].classList.remove("is-active");
    current = (index + total) % total;
    slides[current].classList.add("is-active");

    if (counter) counter.textContent = (current + 1) + "/" + total;
    updateThumbs();
    updateTitle();
  }

  // Aplica estado inicial
  if (current !== 0) {
    slides[0].classList.remove("is-active");
    slides[current].classList.add("is-active");
    if (counter) counter.textContent = (current + 1) + "/" + total;
    updateThumbs();
  }
  updateTitle();

  if (prev) prev.addEventListener("click", function () { goTo(current - 1); });
  if (next) next.addEventListener("click", function () { goTo(current + 1); });
}());
