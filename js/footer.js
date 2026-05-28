(function () {
  var wrap = document.querySelector('.ftr__wordmark-wrap');
  if (!wrap) return;
  if (!('IntersectionObserver' in window)) {
    wrap.classList.add('is-visible');
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      wrap.classList.add('is-visible');
      io.disconnect();
    }
  }, { threshold: 0.05 });
  io.observe(wrap);
})();
