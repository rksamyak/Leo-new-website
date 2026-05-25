function initCareers() {
  const careerItems = document.querySelectorAll('.career-item');

  careerItems.forEach(item => {
    const header  = item.querySelector('.career-item__header');
    const chevron = item.querySelector('.career-item__chevron');

    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Collapse all
      careerItems.forEach(other => {
        other.querySelector('.career-item__header').setAttribute('aria-expanded', 'false');
        other.querySelector('.career-item__chevron').textContent = '+';
        other.classList.remove('career-item--open');
      });

      // Open clicked item if it was closed
      if (!isExpanded) {
        header.setAttribute('aria-expanded', 'true');
        chevron.textContent = '−';
        item.classList.add('career-item--open');
      }
    });
  });
}
