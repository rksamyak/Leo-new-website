function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const SCROLL_THRESHOLD = 40;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
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

    // Desktop: hover open/close handled by CSS, but we still manage aria + keyboard
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 960) {
        closeAll(item);
        item.classList.add('dropdown--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 960) {
        item.classList.remove('dropdown--open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

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
