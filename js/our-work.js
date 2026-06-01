/* ══════════════════════════════════════
   OUR WORK — Overlay & Stack Animation
   ══════════════════════════════════════ */

const WORK_DATA = {
  web: {
    label: 'Websites & Apps',
    projects: [
      {
        name: 'Zeiss India',
        desc: 'Premium optics brand website',
        url: '#',
        gradient: 'linear-gradient(150deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      },
      {
        name: 'SaffronArt',
        desc: 'Online auction & art gallery platform',
        url: '#',
        gradient: 'linear-gradient(150deg, #2d1b00 0%, #8b4513 50%, #d2691e 100%)'
      },
      {
        name: 'ABB Robotics',
        desc: 'Industrial automation showcase',
        url: '#',
        gradient: 'linear-gradient(150deg, #0d0d0d 0%, #1a3a4a 50%, #2d6a8a 100%)'
      }
    ]
  },
  creative: {
    label: 'Creative & Digital',
    projects: [
      {
        name: 'Zeiss Social Campaign',
        desc: 'Product launch social media series',
        url: '#',
        gradient: 'linear-gradient(150deg, #1a0533 0%, #5b21b6 50%, #c084fc 100%)'
      },
      {
        name: 'Instagram Content Series',
        desc: 'Branded content & storytelling',
        url: '#',
        gradient: 'linear-gradient(150deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)'
      },
      {
        name: 'Brand Identity System',
        desc: 'Visual identity & design language',
        url: '#',
        gradient: 'linear-gradient(150deg, #0f172a 0%, #1e3a5f 50%, #3b82f6 100%)'
      }
    ]
  },
  brand: {
    label: 'Brand Launches',
    projects: [
      {
        name: 'Hardik Pandya',
        desc: 'Athlete personal brand launch',
        url: '#',
        gradient: 'linear-gradient(150deg, #064e3b 0%, #059669 50%, #6ee7b7 100%)'
      },
      {
        name: 'Zeiss Otus Series',
        desc: 'Premium lens product line launch',
        url: '#',
        gradient: 'linear-gradient(150deg, #1e1b4b 0%, #3730a3 50%, #818cf8 100%)'
      },
      {
        name: 'New Market Entry',
        desc: 'Full brand identity & go-to-market',
        url: '#',
        gradient: 'linear-gradient(150deg, #450a0a 0%, #991b1b 50%, #fca5a5 100%)'
      }
    ]
  },
  campaigns: {
    label: 'High Impact Campaigns',
    projects: [
      {
        name: 'Celebrity Campaign',
        desc: '360° integrated campaign strategy',
        url: '#',
        gradient: 'linear-gradient(150deg, #431407 0%, #c2410c 50%, #fed7aa 100%)'
      },
      {
        name: 'Mega Product Launch',
        desc: 'Multi-platform awareness campaign',
        url: '#',
        gradient: 'linear-gradient(150deg, #1c1917 0%, #78350f 50%, #fbbf24 100%)'
      },
      {
        name: 'Brand Activation',
        desc: 'On-ground + digital activation',
        url: '#',
        gradient: 'linear-gradient(150deg, #14532d 0%, #15803d 50%, #86efac 100%)'
      }
    ]
  },
  films: {
    label: 'Films & Shoots',
    projects: [
      {
        name: 'ABB Industrial Film',
        desc: 'Corporate documentary & brand film',
        url: '#',
        gradient: 'linear-gradient(150deg, #111827 0%, #374151 50%, #9ca3af 100%)'
      },
      {
        name: 'Lifestyle Product Shoot',
        desc: 'Studio & location photography',
        url: '#',
        gradient: 'linear-gradient(150deg, #0f0f0f 0%, #1f2937 50%, #4b5563 100%)'
      },
      {
        name: 'TVC — 30 Seconds',
        desc: 'Television commercial production',
        url: '#',
        gradient: 'linear-gradient(150deg, #0c0a09 0%, #292524 50%, #78716c 100%)'
      }
    ]
  },
  perf: {
    label: 'Performance Marketing',
    projects: [
      {
        name: 'E-Commerce Scale-Up',
        desc: 'ROAS-optimised paid media',
        url: '#',
        gradient: 'linear-gradient(150deg, #431407 0%, #ea580c 50%, #fed7aa 100%)'
      },
      {
        name: 'B2B Lead Generation',
        desc: 'Full-funnel acquisition strategy',
        url: '#',
        gradient: 'linear-gradient(150deg, #1a2e1a 0%, #15803d 50%, #bbf7d0 100%)'
      },
      {
        name: 'Paid Social Growth',
        desc: 'Meta & Google acquisition campaigns',
        url: '#',
        gradient: 'linear-gradient(150deg, #1e3a5f 0%, #2563eb 50%, #bfdbfe 100%)'
      }
    ]
  },
  award: {
    label: 'Award Winning Campaigns',
    projects: [
      {
        name: 'The Arts of India',
        desc: 'Award-winning cultural campaign',
        url: '#',
        gradient: 'linear-gradient(150deg, #450a0a 0%, #7f1d1d 50%, #fca5a5 100%)'
      },
      {
        name: 'Heritage Series',
        desc: 'Impact campaign — national recognition',
        url: '#',
        gradient: 'linear-gradient(150deg, #1c0a00 0%, #92400e 50%, #fde68a 100%)'
      },
      {
        name: 'Digital First Initiative',
        desc: 'Industry award-winning digital work',
        url: '#',
        gradient: 'linear-gradient(150deg, #0a0a0a 0%, #1e1b4b 50%, #818cf8 100%)'
      }
    ]
  },
  innovations: {
    label: 'Innovations',
    projects: [
      {
        name: 'Nasdaq Billboard',
        desc: 'Times Square digital out-of-home',
        url: '#',
        gradient: 'linear-gradient(150deg, #0f172a 0%, #1e3a8a 50%, #60a5fa 100%)'
      },
      {
        name: 'AR Brand Experience',
        desc: 'Augmented reality activation',
        url: '#',
        gradient: 'linear-gradient(150deg, #1a0533 0%, #4c1d95 50%, #a78bfa 100%)'
      },
      {
        name: 'AI Creative Campaign',
        desc: 'Generative AI-powered creative project',
        url: '#',
        gradient: 'linear-gradient(150deg, #042f2e 0%, #0f766e 50%, #5eead4 100%)'
      }
    ]
  }
};

/* ── Build overlay HTML ── */
function buildOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'work-overlay';
  overlay.id = 'workOverlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'workOverlayTitle');
  overlay.innerHTML = `
    <div class="work-overlay__header">
      <h2 class="work-overlay__title" id="workOverlayTitle"></h2>
      <button class="work-overlay__close" id="workOverlayClose" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div class="work-overlay__body">
      <div class="work-overlay__grid" id="workOverlayGrid"></div>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

/* ── Render project cards into the grid ── */
function renderProjects(serviceKey) {
  const data = WORK_DATA[serviceKey];
  if (!data) return;

  const titleEl = document.getElementById('workOverlayTitle');
  const grid    = document.getElementById('workOverlayGrid');

  titleEl.textContent = data.label;
  grid.innerHTML = '';

  data.projects.forEach((proj, i) => {
    const card = document.createElement('a');
    card.className = 'proj-card';
    card.href = proj.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('data-index', i);
    card.innerHTML = `
      <div class="proj-card__browser">
        <div class="proj-card__chrome">
          <span class="proj-card__dot"></span>
          <span class="proj-card__dot"></span>
          <span class="proj-card__dot"></span>
          <div class="proj-card__url-bar"></div>
        </div>
        <div class="proj-card__screen" style="background: ${proj.gradient};"></div>
      </div>
      <div class="proj-card__info">
        <p class="proj-card__name">${proj.name}</p>
        <span class="proj-card__meta">${proj.desc}</span>
        <span class="proj-card__link">
          View Project
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── Trigger stack-in animation for each card ── */
function animateCards() {
  const cards = document.querySelectorAll('.proj-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('is-visible');
    }, 80 + i * 100);
  });
}

/* ── Open overlay ── */
function openOverlay(serviceKey) {
  const overlay = document.getElementById('workOverlay');
  renderProjects(serviceKey);
  overlay.scrollTop = 0;

  requestAnimationFrame(() => {
    overlay.classList.add('is-open');
    document.body.classList.add('overlay-open');
    animateCards();
  });
}

/* ── Close overlay ── */
function closeOverlay() {
  const overlay = document.getElementById('workOverlay');
  overlay.classList.remove('is-open');
  document.body.classList.remove('overlay-open');
}

/* ── Init ── */
function initWorkOverlay() {
  buildOverlay();

  /* Close button */
  document.getElementById('workOverlayClose').addEventListener('click', closeOverlay);

  /* Click outside content area to close */
  document.getElementById('workOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeOverlay();
  });

  /* ESC key to close */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOverlay();
  });

  /* Wire up each service card */
  document.querySelectorAll('.ow-card[data-service]').forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      openOverlay(this.dataset.service);
    });
  });
}

document.addEventListener('DOMContentLoaded', initWorkOverlay);
