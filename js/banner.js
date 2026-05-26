(function () {
  'use strict';

  function initBanner() {
    const track = document.getElementById('bannerTrack');
    const dots = document.querySelectorAll('.banner-dot');
    const prevBtn = document.getElementById('bannerPrev');
    const nextBtn = document.getElementById('bannerNext');
    if (!track || !dots.length) return;

    const total = dots.length;
    let current = 0;
    let timer = null;
    const INTERVAL = 4500;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('banner-dot--active', i === current));
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      timer = setInterval(next, INTERVAL);
    }

    function stopAuto() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    nextBtn.addEventListener('click', () => { next(); startAuto(); });
    prevBtn.addEventListener('click', () => { prev(); startAuto(); });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goTo(parseInt(dot.dataset.index, 10));
        startAuto();
      });
    });

    // Pause on hover
    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', startAuto);

    // Touch/swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const delta = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) { delta > 0 ? next() : prev(); startAuto(); }
    }, { passive: true });

    startAuto();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
