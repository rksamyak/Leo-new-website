/**
 * hero-banner.js
 * Handles: sticky navbar, hamburger menu, smooth parallax on phone mockups
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════
     1. STICKY NAVBAR — glass on scroll
  ══════════════════════════════════════ */
  const nav = document.getElementById('hbNav');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  /* ══════════════════════════════════════
     2. HAMBURGER MENU
  ══════════════════════════════════════ */
  const hamburger  = document.getElementById('hbHamburger');
  const navLinks   = document.getElementById('hbNavLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close when a link is clicked
    navLinks.querySelectorAll('.hb-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }


  /* ══════════════════════════════════════
     3. MOUSE PARALLAX — smooth lerp
     Phones move at different speeds/directions
     giving a layered 3-D floating depth effect
  ══════════════════════════════════════ */
  const pw1    = document.getElementById('pw1');   // back phone
  const pw2    = document.getElementById('pw2');   // mid phone
  const pw3    = document.getElementById('pw3');   // front phone
  const visual = document.getElementById('hbVisual');

  if (pw1 && pw2 && pw3 && visual) {

    // Normalised mouse target (-1 to +1)
    let targetX = 0;
    let targetY = 0;

    // Lerped current values (start at 0)
    let curX = 0;
    let curY = 0;

    // Lerp speed — lower = smoother/slower catch-up
    const LERP = 0.055;

    // Parallax strength per phone (px per unit)
    const STRENGTH = {
      back:  { x: -18, y: -10 },   // moves opposite, most distance
      mid:   { x:  14, y:   8 },   // moves with cursor, medium
      front: { x:   6, y:   4 },   // subtlest movement — closest layer
    };

    // Track mouse over the visual or the whole page
    document.addEventListener('mousemove', e => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;   // -1 (left) to +1 (right)
      targetY = (e.clientY - cy) / cy;   // -1 (top)  to +1 (bottom)
    });

    // Reset on mouse leave so phones drift back to center
    document.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    // rAF loop — lerp toward target, apply transforms
    function animateParallax() {
      curX += (targetX - curX) * LERP;
      curY += (targetY - curY) * LERP;

      // Only repaint if moved meaningfully
      if (Math.abs(curX) > 0.0005 || Math.abs(curY) > 0.0005) {
        pw1.style.transform = `translate(${curX * STRENGTH.back.x}px, ${curY * STRENGTH.back.y}px)`;
        pw2.style.transform = `translate(${curX * STRENGTH.mid.x}px,  ${curY * STRENGTH.mid.y}px)`;
        pw3.style.transform = `translate(${curX * STRENGTH.front.x}px,${curY * STRENGTH.front.y}px)`;
      }

      requestAnimationFrame(animateParallax);
    }

    animateParallax();
  }


  /* ══════════════════════════════════════
     4. TOUCH TILT — mobile parallax via gyro
     Degrades gracefully if not available
  ══════════════════════════════════════ */
  if (window.DeviceOrientationEvent && pw1 && pw2 && pw3) {
    window.addEventListener('deviceorientation', e => {
      // gamma = left/right tilt, beta = front/back tilt
      const gx = Math.min(Math.max(e.gamma / 30, -1), 1); // clamp to ±1
      const gy = Math.min(Math.max(e.beta  / 30, -1), 1);

      pw1.style.transform = `translate(${gx * -12}px, ${gy * -8}px)`;
      pw2.style.transform = `translate(${gx *  10}px, ${gy *  6}px)`;
      pw3.style.transform = `translate(${gx *   5}px, ${gy *  3}px)`;
    }, { passive: true });
  }


  /* ══════════════════════════════════════
     5. FADE-IN STAGGER — phones appear
     with a slight stagger after page load
  ══════════════════════════════════════ */
  const phones = document.querySelectorAll('.hb-phone__frame');
  phones.forEach((phone, i) => {
    phone.style.opacity = '0';
    phone.style.transform += ' scale(0.88)';
    phone.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

    setTimeout(() => {
      phone.style.opacity = '1';
      phone.style.transform = phone.style.transform.replace(' scale(0.88)', '');
    }, 600 + i * 160);
  });

})();
