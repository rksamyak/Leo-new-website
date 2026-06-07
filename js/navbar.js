function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hero   = document.getElementById('heroSlider') || document.getElementById('hero-ai');

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);

    // Dark glass when floating over the purple hero section
    const heroEnd = hero ? hero.offsetHeight - 80 : 0;
    navbar.classList.toggle('navbar--over-dark', heroEnd > 0 && y < heroEnd);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initDropdowns() {
  const dropdownItems = document.querySelectorAll('.nav-item--dropdown');

  function closeAll(except) {
    dropdownItems.forEach(item => {
      if (item === except) return;
      item.classList.remove('dropdown--open');
      const btn = item.querySelector('.nav-link[aria-expanded]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  dropdownItems.forEach(item => {
    const btn = item.querySelector('.nav-link[aria-expanded]');
    if (!btn) return;

    // Each item gets its own close timer so straying briefly doesn't snap it shut
    let closeTimer = null;

    function scheduleClose() {
      closeTimer = setTimeout(() => {
        item.classList.remove('dropdown--open');
        btn.setAttribute('aria-expanded', 'false');
      }, 180); // 180ms grace period — long enough to cross the gap, short enough to feel instant
    }

    function cancelClose() {
      clearTimeout(closeTimer);
    }

    // Desktop: hover open/close with delay
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 960) {
        cancelClose();
        closeAll(item);
        item.classList.add('dropdown--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 960) {
        scheduleClose();
      }
    });

    // Keep open when mouse re-enters the dropdown panel itself
    const panel = item.querySelector('.dropdown');
    if (panel) {
      panel.addEventListener('mouseenter', () => {
        if (window.innerWidth > 960) cancelClose();
      });
      panel.addEventListener('mouseleave', () => {
        if (window.innerWidth > 960) scheduleClose();
      });
    }

    // Mobile: toggle on click
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 960) {
        const isOpen = item.classList.contains('dropdown--open');
        closeAll(null);
        if (!isOpen) {
          item.classList.add('dropdown--open');
          btn.setAttribute('aria-expanded', 'true');
        }
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-item--dropdown')) {
      closeAll(null);
    }
  });

  // Close all on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeAll(null);
  });
}
