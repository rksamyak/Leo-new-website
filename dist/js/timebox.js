/* ── Timebox: animated live clock triggered by hero title click ── */

function initTimebox() {
  const overlay   = document.getElementById('timeboxOverlay');
  const closeBtn  = document.getElementById('timeboxClose');
  const heroTitle = document.getElementById('heroTitle');

  if (!overlay || !heroTitle) return;

  const tbHH      = document.getElementById('tbHH');
  const tbMM      = document.getElementById('tbMM');
  const tbSS      = document.getElementById('tbSS');
  const tbDate    = document.getElementById('timeboxDate');
  const tbTZ      = document.getElementById('timeboxTZ');
  const tbBarFill = document.getElementById('timeboxBarFill');

  let tickTimer = null;

  const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now  = new Date();
    const h    = now.getHours();
    const m    = now.getMinutes();
    const s    = now.getSeconds();

    tbHH.textContent = pad(h);
    tbMM.textContent = pad(m);
    tbSS.textContent = pad(s);

    // Date
    tbDate.textContent = `${DAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;

    // Timezone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local Time';
    tbTZ.textContent  = tz;

    // Seconds progress bar (0-59 → 0-100%)
    tbBarFill.style.width = `${(s / 59) * 100}%`;
  }

  function openTimebox() {
    overlay.hidden = false;
    // Force reflow so transition fires
    overlay.offsetHeight; // eslint-disable-line no-unused-expressions
    tick();
    tickTimer = setInterval(tick, 1000);
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeTimebox() {
    overlay.hidden = true;
    clearInterval(tickTimer);
    tickTimer = null;
    document.body.style.overflow = '';
    heroTitle.focus();
  }

  // Hero title click / keyboard
  heroTitle.addEventListener('click', openTimebox);
  heroTitle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openTimebox();
    }
  });

  // Close button
  closeBtn.addEventListener('click', closeTimebox);

  // Backdrop click
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeTimebox();
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !overlay.hidden) closeTimebox();
  });
}

document.addEventListener('DOMContentLoaded', initTimebox);
