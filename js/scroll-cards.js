(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────
     SCROLL CARDS  —  Snap + Slam scroll storytelling
     Architecture
     ─────────────────────────────────────────────────────────────
     • section is 400 vh tall (provides scroll runway)
     • .sc-sticky is position:sticky (CSS pins the display frame)
     • ScrollTrigger watches the section and SNAPS the scroll
       position to [0, 1/3, 2/3, 1] so each card "locks" the page
     • onUpdate detects progress crossing thresholds and fires
       fast time-based GSAP tweens (back.out ease → slam feel)
     • No scrub — animations play at real-time speed regardless
       of how fast the user scrolls
  ───────────────────────────────────────────────────────────── */

  function initScrollCards() {
    const section = document.getElementById('scrollCardsSection');
    if (!section) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const card1   = document.getElementById('scCard1');
    const card2   = document.getElementById('scCard2');
    const card3   = document.getElementById('scCard3');
    if (!card1 || !card2 || !card3) return;

    const CARDS   = [card1, card2, card3];
    const dots    = section.querySelectorAll('.sc-progress__dot');
    const counter = section.querySelector('.sc-counter__current');

    /* ── Timing constants ── */
    const SLAM_DUR   = 0.48;
    const SLAM_EASE  = 'back.out(1.35)';   /* spring overshoot = "slam" */
    const PUSH_DUR   = 0.36;
    const PUSH_EASE  = 'power2.in';
    const CONTENT_DUR = 0.26;

    /* ── Set every card off-screen below to start ── */
    gsap.set(CARDS, { y: '108vh', scale: 1, opacity: 1, force3D: true });

    /* ── Active card tracker ── */
    let currentIdx = -1;   /* -1 = section not yet entered */

    /* ── Progress indicator ── */
    function setActive(i) {
      dots.forEach((d, n) => d.classList.toggle('sc-progress__dot--active', n === i));
      if (counter) counter.textContent = String(i + 1).padStart(2, '0');
    }

    /* ── Content elements within a card ── */
    function contentEls(card) {
      return card.querySelectorAll(
        '.sc-card__eyebrow, .sc-card__icon-wrap, .sc-card__title, ' +
        '.sc-card__desc, .sc-card__stat, .sc-card__cta'
      );
    }

    /* ── Core: animate to a target card ──────────────────────── */
    function goTo(idx, dir) {
      if (idx === currentIdx) return;
      const prev = currentIdx;
      currentIdx = idx;

      setActive(idx);

      const target = CARDS[idx];

      /* Kill any running tweens on the moving cards */
      gsap.killTweensOf(target);
      if (prev >= 0) gsap.killTweensOf(CARDS[prev]);

      /* ── SLAM IN ── */
      if (dir === 'forward') {
        /* New card slams up from below with a spring overshoot */
        gsap.fromTo(
          target,
          { y: '108vh', scale: 0.92, force3D: true },
          { y: '0vh',   scale: 1,    opacity: 1,
            duration: SLAM_DUR, ease: SLAM_EASE, force3D: true }
        );
      } else {
        /* Coming back: card was pushed upward — pull it back down to centre */
        gsap.to(target, {
          y: '0vh', scale: 1, opacity: 1,
          duration: SLAM_DUR, ease: SLAM_EASE, force3D: true,
        });
      }

      /* ── CONTENT stagger reveals after the card lands ── */
      const els = contentEls(target);
      gsap.killTweensOf(els);
      gsap.fromTo(
        els,
        { opacity: 0, y: 18, force3D: true },
        { opacity: 1, y: 0,
          duration: CONTENT_DUR,
          ease: 'power2.out',
          stagger: 0.045,
          delay: SLAM_DUR * 0.35,   /* start during last third of slam */
          force3D: true }
      );

      /* ── PUSH OUT previous card ── */
      if (prev >= 0) {
        const old = CARDS[prev];
        if (dir === 'forward') {
          /* Push old card upward and fade — recedes behind the new card */
          gsap.to(old, {
            y: '-12vh', scale: 0.88, opacity: 0,
            duration: PUSH_DUR, ease: PUSH_EASE, force3D: true,
          });
        } else {
          /* Drop old card back below — it will slam in again if re-reached */
          gsap.to(old, {
            y: '108vh', scale: 0.92,
            duration: PUSH_DUR, ease: PUSH_EASE, force3D: true,
          });
        }
      }
    }

    /* ── Reset everything when leaving the section upward ── */
    function resetAll() {
      currentIdx = -1;
      gsap.killTweensOf(CARDS);
      gsap.set(CARDS, { y: '108vh', scale: 1, opacity: 1, force3D: true });
      setActive(0);
    }

    /* ─────────────────────────────────────────────────────────
       Progress → card index mapping
       section = 400 vh  |  sticky = 100 vh
       ∴ 300 vh of scroll  (progress 0 → 1)
       snap points: 0, 0.333, 0.667, 1
    ───────────────────────────────────────────────────────── */
    function progressToCard(p) {
      if (p < 0.28) return 0;
      if (p < 0.62) return 1;
      return 2;
    }

    /* ── ScrollTrigger ── */
    ScrollTrigger.create({
      trigger : section,
      start   : 'top top',
      end     : 'bottom bottom',

      /* ── SNAP: locks the scroll to each card position ──────
         This is what makes the page feel "stuck" per card.
         duration.min / max control how fast the snap fires.    */
      snap: {
        snapTo   : [0, 1 / 3, 2 / 3, 1],
        duration : { min: 0.18, max: 0.42 },
        delay    : 0.04,
        ease     : 'power3.inOut',
      },

      onEnter() {
        goTo(0, 'forward');
      },

      onLeaveBack() {
        resetAll();
      },

      onUpdate(self) {
        const target = progressToCard(self.progress);
        const dir    = self.direction > 0 ? 'forward' : 'backward';
        goTo(target, dir);
      },
    });
  }

  document.addEventListener('DOMContentLoaded', initScrollCards);
})();
