(function () {
  'use strict';

  function initStackCards() {
    var section = document.getElementById('stkSection');
    var sticky  = section && section.querySelector('.stk-sticky');
    if (!sticky) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    var CARDS = [
      document.getElementById('stkCard1'),
      document.getElementById('stkCard2'),
      document.getElementById('stkCard3'),
    ];
    if (CARDS.some(function(c) { return !c; })) return;

    var SEL = '.stk-eyebrow, .stk-title, .stk-desc, .stk-stats, .stk-cta, .stk-card__visual';

    /* ── Initial state: cards hidden below, ready to rise up ── */
    gsap.set(CARDS, {
      opacity             : 0,
      y                   : 220,
      rotateX             : 6,
      transformPerspective: 1000,
      transformOrigin     : 'center center',
      force3D             : true,
    });
    CARDS.forEach(function(card) {
      gsap.set(card.querySelectorAll(SEL), { autoAlpha: 0, y: 40, force3D: true });
    });

    var ELS = CARDS.map(function(card) { return card.querySelectorAll(SEL); });
    var INNERS = CARDS.map(function(card) { return card.querySelector('.stk-card__inner'); });

    var tl = gsap.timeline();

    /* Card rises from below with 3D floor-rise (y 220→0, rotateX 6→0, opacity 0→1) */
    function cardIn(card, els, t) {
      tl.to(card, { opacity: 1, y: 0, rotateX: 0, duration: 1.3, ease: 'power2.out', force3D: true }, t);
      tl.to(els,  { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09, ease: 'power2.out', force3D: true }, t + 0.3);
    }

    /* Card slides up and out (y 0→-150, opacity 1→0) */
    function cardOut(card, els, t) {
      tl.to(els,  { autoAlpha: 0, y: -35, duration: 0.4, stagger: 0.04, ease: 'power2.in', force3D: true }, t);
      tl.to(card, { opacity: 0, y: -150, duration: 0.55, ease: 'power2.in', force3D: true }, t);
    }

    /*
      Timeline layout — 1 unit ≈ 100 vh of scroll:
        0   → 1.3  Card 1 slides in
        1.3 → 2.3  Card 1 holds
        2.3 → 2.85 Card 1 slides out    Card 2 begins entering at 2.6
        2.6 → 3.9  Card 2 slides in
        3.9 → 4.9  Card 2 holds
        4.9 → 5.45 Card 2 slides out    Card 3 begins entering at 5.2
        5.2 → 6.5  Card 3 slides in
        6.5 → 7.5  Card 3 holds
    */

    cardIn (CARDS[0], ELS[0], 0);
    tl.fromTo(INNERS[0], { y: 0, x: 0, scale: 1 }, { y: -40, x: -8, scale: 1.06, duration: 1.0, ease: 'none' }, 1.3);
    cardOut(CARDS[0], ELS[0], 2.3);
    tl.to(INNERS[0], { y: 0, x: 0, scale: 1, duration: 0.55, ease: 'power2.in' }, 2.3);

    cardIn (CARDS[1], ELS[1], 2.6);
    tl.fromTo(INNERS[1], { y: 0, x: 0, scale: 1 }, { y: -40, x: -8, scale: 1.06, duration: 1.0, ease: 'none' }, 3.9);
    cardOut(CARDS[1], ELS[1], 4.9);
    tl.to(INNERS[1], { y: 0, x: 0, scale: 1, duration: 0.55, ease: 'power2.in' }, 4.9);

    cardIn (CARDS[2], ELS[2], 5.2);
    tl.fromTo(INNERS[2], { y: 0, x: 0, scale: 1 }, { y: -40, x: -8, scale: 1.06, duration: 1.0, ease: 'none' }, 6.5);

    /* Hold Card 3 on screen until the pin releases */
    tl.set(CARDS[2], { opacity: 1 }, 7.5);

    ScrollTrigger.create({
      animation : tl,
      trigger   : section,
      pin       : sticky,
      start     : 'top top',
      end       : '+=750%',
      scrub     : 1.5,
      pinSpacing: true,
    });
  }

  /* ── One-card scroll parallax: content rises as you scroll ── */
  function initOneCardParallax() {
    var section = document.querySelector('.one-card-section');
    if (!section) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var trigger = {
      trigger : section,
      start   : 'top bottom',
      end     : 'bottom top',
      scrub   : 1.5,
    };

    /* Text content rises 70px */
    gsap.to('.one-card__inner', {
      y    : -70,
      ease : 'none',
      scrollTrigger: trigger,
    });

    /* Phone rises slightly slower — cinematic depth */
    gsap.to('.one-card__phone-wrap', {
      y    : -38,
      ease : 'none',
      scrollTrigger: trigger,
    });
  }

  document.addEventListener('DOMContentLoaded', initStackCards);
  document.addEventListener('DOMContentLoaded', initOneCardParallax);
})();
