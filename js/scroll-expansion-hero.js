(function () {
  'use strict';

  var section = document.getElementById('sehSection');
  var wrap    = document.getElementById('sehWrap');
  var overlay = document.getElementById('sehOverlay');

  if (!section || !wrap) return;

  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }
  function lerp(a, b, t)    { return a + (b - a) * t; }

  var isMobile = window.innerWidth <= 480;

  var START_W = isMobile ? 94 : (window.innerWidth <= 900 ? 88 : 65);
  var START_H = isMobile ? 42 : (window.innerWidth <= 900 ? 46 : 55);
  var START_R = isMobile ? 12 : (window.innerWidth <= 900 ? 14 : 20);

  function tick() {
    var rect  = section.getBoundingClientRect();
    var range = section.offsetHeight - window.innerHeight;
    if (range <= 0) return;

    var t = clamp(-rect.top / range, 0, 1);

    wrap.style.width        = lerp(START_W, 100, t) + '%';
    wrap.style.height       = lerp(START_H, 100, t) + 'vh';
    wrap.style.borderRadius = lerp(START_R, 0,   t) + 'px';

    if (overlay) {
      overlay.style.opacity = String(clamp(1 - t * 2.5, 0, 1));
    }
  }

  function onResize() {
    isMobile = window.innerWidth <= 480;
    START_W  = isMobile ? 94 : (window.innerWidth <= 900 ? 88 : 65);
    START_H  = isMobile ? 42 : (window.innerWidth <= 900 ? 46 : 55);
    START_R  = isMobile ? 12 : (window.innerWidth <= 900 ? 14 : 20);
    tick();
  }

  window.addEventListener('scroll', tick,     { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  tick();
})();
