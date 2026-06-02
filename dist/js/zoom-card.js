(function () {
  'use strict';

  function initZoomCard() {
    const sticky  = document.querySelector('.zc-sticky');
    const content = document.querySelector('.zc-content');
    if (!sticky || !content) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    /* Start: content scaled down, faded, nudged upward */
    gsap.set(content, { scale: 0.68, opacity: 0, y: 60, force3D: true });

    /* Timeline: zoom toward viewer as user scrolls */
    const tl = gsap.timeline();
    tl.to(content, {
      scale:   1,
      opacity: 1,
      y:       0,
      ease:    'power2.out',
      duration: 1,
      force3D: true,
    });

    /* Pin the card + scrub the timeline to scroll progress */
    ScrollTrigger.create({
      animation:   tl,
      trigger:     sticky,
      start:       'top top',
      end:         '+=140%',   /* 140vh of scroll runway while pinned */
      pin:         true,
      scrub:       1.6,        /* weight/lag — feels cinematic */
      pinSpacing:  true,
    });
  }

  document.addEventListener('DOMContentLoaded', initZoomCard);
})();
