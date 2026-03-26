/**
 * Header — scroll shrink + drawer lateral
 */
(function () {
  const header      = document.querySelector('.header');
  const headerBg    = document.querySelector('.header__bg');
  const menuToggle  = document.querySelector('.header__menu-toggle');
  const drawer      = document.querySelector('.nav-drawer');
  const drawerClose = document.querySelector('.nav-drawer__close');
  const overlay     = document.querySelector('.nav-overlay');

  if (!header) return;

  // ──────────────────────────────────────────
  // Efeito de scroll: encolhe o logo e mostra
  // a barra de fundo cinza no topo
  // ──────────────────────────────────────────
  const SCROLL_THRESHOLD = 60;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('header--scrolled');
      if (headerBg) headerBg.classList.add('is-visible');
    } else {
      header.classList.remove('header--scrolled');
      if (headerBg) headerBg.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // aplica estado inicial

  // ──────────────────────────────────────────
  // Drawer lateral
  // ──────────────────────────────────────────
  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    menuToggle && menuToggle.setAttribute('aria-expanded', 'true');
    // foco no botão fechar
    if (drawerClose) drawerClose.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    menuToggle && menuToggle.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.focus();
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openDrawer);
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  // Fecha links do drawer e ESC
  if (drawer) {
    drawer.querySelectorAll('.nav-drawer__link').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}());
