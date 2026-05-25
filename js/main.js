document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initModal();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initCareers();
  initContactForm();
});

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
