function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const SCROLL_THRESHOLD = 60;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }

  function setActiveLink() {
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const isActive = href === currentPage || (currentPage === '' && href === 'index.html');
      link.classList.toggle('nav-link--active', isActive);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  setActiveLink();
}
