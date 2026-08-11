// Menu hambúrguer da barra .op-bar, usada nas páginas autônomas
// (painéis e capas de projeto). Equivalente ao assets/nav.js, que
// cuida da barra .topbar das páginas institucionais.
(function () {
  function init() {
    var bar = document.querySelector('.op-bar');
    var nav = bar && bar.querySelector('.op-nav');
    var btn = bar && bar.querySelector('.op-toggle');
    if (!bar || !nav || !btn) return;

    function setOpen(open) {
      nav.classList.toggle('open', open);
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!nav.classList.contains('open'));
    });

    // fecha ao clicar num item ou fora do menu
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !bar.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
