function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  function openMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.classList.add('hamburger--open');
    navLinks.classList.add('menu--open');
  }

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('hamburger--open');
    navLinks.classList.remove('menu--open');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Close on regular (non-dropdown) link click
  navLinks.addEventListener('click', e => {
    if (e.target.classList.contains('nav-link') && !e.target.hasAttribute('aria-haspopup')) {
      closeMenu();
    }
    // Also close when clicking a dropdown leaf item
    if (e.target.classList.contains('dropdown__item') || e.target.closest('.dropdown__item')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.contains(e.target)) closeMenu();
  });
}
