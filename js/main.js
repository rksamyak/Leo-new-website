document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDropdowns();
  if (typeof initHeroAI === 'function') initHeroAI();
  initModal();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initCareers();
  initContactForm();
  initNewsDots();
});

function initNewsDots() {
  const items = document.querySelectorAll('.news-item');
  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const dot = entry.target.querySelector('.news-item__dot');
      if (dot) dot.classList.toggle('news-item__dot--active', entry.isIntersecting);
    });
  }, { threshold: 0.4 });

  items.forEach(item => observer.observe(item));
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const fields  = form.querySelectorAll('[required]');
    let isValid   = true;

    fields.forEach(field => {
      const empty = !field.value.trim();
      field.classList.toggle('field--error', empty);
      if (empty) isValid = false;
    });

    if (!isValid) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.disabled = true;
    form.reset();

    setTimeout(() => {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 4000);
  });

  // Clear error on input
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('field--error'));
  });
}
