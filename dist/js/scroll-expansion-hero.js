(function () {
  'use strict';

  var section = document.getElementById('sehSection');
  var wrap    = document.getElementById('sehWrap');
  var overlay = document.getElementById('sehOverlay');

  if (!section || !wrap) return;

  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }
  function lerp(a, b, t)    { return a + (b - a) * t; }

  function getBreakpointValues() {
    var w = window.innerWidth;
    if (w <= 480) return { w: 95, h: 40, r: 12 };
    if (w <= 768) return { w: 92, h: 44, r: 14 };
    if (w <= 900) return { w: 90, h: 46, r: 16 };
    return { w: 65, h: 55, r: 20 };
  }

  var bp = getBreakpointValues();
  var START_W = bp.w;
  var START_H = bp.h;
  var START_R = bp.r;

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
    var bp = getBreakpointValues();
    START_W = bp.w;
    START_H = bp.h;
    START_R = bp.r;
    tick();
  }

  window.addEventListener('scroll', tick,     { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  tick();
})();
