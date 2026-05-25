function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const SCROLL_THRESHOLD = 60;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
    updateActiveLink();
  }

  function updateActiveLink() {
    const triggerY = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0]?.id || '';

    sections.forEach(section => {
      if (section.offsetTop <= triggerY) current = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'nav-link--active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
