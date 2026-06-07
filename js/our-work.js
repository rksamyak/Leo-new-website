/* ══════════════════════════════════════
   OUR WORK — Overlay & Project Cards
   All project images: verified Unsplash photos
   ══════════════════════════════════════ */

function unsplash(id) {
  return `https://images.unsplash.com/photo-${id}?w=640&h=400&auto=format&fit=crop&q=80`;
}

const WORK_DATA = {
  web: {
    label: 'Websites & Apps',
    projects: [
      {
        name: 'Zeiss India',
        desc: 'Premium optics brand — product catalogue & dealer portal',
        url: '#',
        image: unsplash('1467232004584-a241de8bcf5d')   // website on laptop screen
      },
      {
        name: 'SaffronArt',
        desc: 'Live auction platform & fine art gallery',
        url: '#',
        image: unsplash('1541961017774-22349e4a1262')   // art gallery interior
      },
      {
        name: 'ABB India',
        desc: 'Industrial automation & robotics showcase',
        url: '#',
        image: unsplash('1560472354-b33ff0c44a43')      // industrial/factory floor
      }
    ]
  },
  creative: {
    label: 'Creative & Digital',
    projects: [
      {
        name: 'Zeiss Photography Series',
        desc: 'Multi-platform content series for the Otus lens launch',
        url: '#',
        image: unsplash('1452421822248-d4c2b47f0c81')   // camera / photography
      },
      {
        name: 'Fujifilm Instax — Social',
        desc: 'Instagram & Reels content for the Gen Z Instax range',
        url: '#',
        image: unsplash('1531746790731-6c087fecd65a')   // colourful social content
      },
      {
        name: 'CNBC TV18 Digital Rebrand',
        desc: 'Visual language refresh across digital touchpoints',
        url: '#',
        image: unsplash('1576633587382-13ddf37b1fc1')   // broadcast / media studio
      }
    ]
  },
  brand: {
    label: 'Brand Launches',
    projects: [
      {
        name: 'Hardik Pandya Foundation',
        desc: 'Athlete personal brand identity & launch campaign',
        url: '#',
        image: unsplash('1461896836934-ffe607ba8211')   // athlete / sports
      },
      {
        name: 'Zeiss Otus 1.4',
        desc: 'Premium lens product launch — trade & consumer',
        url: '#',
        image: unsplash('1492691527719-9d1e07e534b4')   // cinematographer with camera
      },
      {
        name: 'Olectra EV — Market Entry',
        desc: 'Brand positioning & go-to-market for electric buses',
        url: '#',
        image: unsplash('1558618666-fcd25c85cd64')      // electric vehicle charging
      }
    ]
  },
  campaigns: {
    label: 'High Impact Campaigns',
    projects: [
      {
        name: 'Fujifilm Instax — Diwali',
        desc: 'Festival season campaign across Meta, OOH & retail',
        url: '#',
        image: unsplash('1507003211169-0a1dd7228f2d')   // colourful celebration / festival
      },
      {
        name: 'ABB Robotics India Launch',
        desc: 'B2B awareness across print, digital & trade events',
        url: '#',
        image: unsplash('1485827404703-89b55fcc595e')   // robotics / automation
      },
      {
        name: 'Times of India Digital Summit',
        desc: 'Event campaign — audience acquisition & live coverage',
        url: '#',
        image: unsplash('1475721027785-f74eccf877e2')   // conference / keynote event
      }
    ]
  },
  films: {
    label: 'Films & Shoots',
    projects: [
      {
        name: 'ABB — The Factory Floor',
        desc: 'Documentary-style brand film, 4-minute cut',
        url: '#',
        image: unsplash('1485846234645-a62644f84728')   // film crew on set
      },
      {
        name: 'Zeiss Lens — Product Film',
        desc: 'Studio and location shoot, 60-second hero film',
        url: '#',
        image: unsplash('1536440136628-849c177e76a1')   // cinema / film production
      },
      {
        name: 'JLL India — Office Futures',
        desc: 'Property campaign TVC for commercial real estate',
        url: '#',
        image: unsplash('1497366216548-37526070297c')   // modern office interior
      }
    ]
  },
  perf: {
    label: 'Performance Marketing',
    projects: [
      {
        name: 'SaffronArt — Buyer Acquisition',
        desc: 'Paid media strategy driving qualified art buyers',
        url: '#',
        image: unsplash('1533750349088-cd871a92f312')   // marketing analytics / data
      },
      {
        name: 'ABB India — Lead Generation',
        desc: 'Full-funnel B2B acquisition across Google & LinkedIn',
        url: '#',
        image: unsplash('1573496359142-b8d87734a5a2')   // professional B2B meeting
      },
      {
        name: 'Olectra — Meta Campaigns',
        desc: 'Retargeting & prospecting for EV fleet buyers',
        url: '#',
        image: unsplash('1432888498266-38ffec3eaf0a')   // digital marketing / laptop
      }
    ]
  },
  award: {
    label: 'Award Winning Campaigns',
    projects: [
      {
        name: 'The Arts of India',
        desc: 'Cultural campaign — Abby Award, Effie shortlist',
        url: '#',
        image: unsplash('1516450360452-9312f5e86fc7')   // Indian art / traditional
      },
      {
        name: 'Times of India — 175 Years',
        desc: 'Heritage campaign, national press recognition',
        url: '#',
        image: unsplash('1522202176988-66273c2fd55f')   // team at milestone event
      },
      {
        name: 'Zeiss — See Beyond',
        desc: 'Photography-led campaign, Campaign India recognition',
        url: '#',
        image: unsplash('1506905925346-21bda4d32df4')   // stunning landscape photography
      }
    ]
  },
  innovations: {
    label: 'Innovations',
    projects: [
      {
        name: 'Nasdaq Billboard — Mumbai',
        desc: 'Digital out-of-home, Bandra Kurla Complex',
        url: '#',
        image: unsplash('1557683311-eac922347aa1')      // digital billboard / OOH
      },
      {
        name: 'Fujifilm AR Activation',
        desc: 'Augmented reality photo booth — 12 city rollout',
        url: '#',
        image: unsplash('1592478411213-6153e4ebc07d')   // AR application on tablet
      },
      {
        name: 'Programmatic OOH — Olectra',
        desc: 'Data-driven outdoor — charging corridor targeting',
        url: '#',
        image: unsplash('1545569341-9eb8b30979d9')      // outdoor advertising / city
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

/* ── Render project cards with real images ── */
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
        <div class="proj-card__screen">
          <img
            src="${proj.image}"
            alt="${proj.name}"
            loading="lazy"
            style="width:100%;height:100%;object-fit:cover;display:block;"
            onerror="this.parentElement.style.background='linear-gradient(135deg,#1C2B38,#384959)'"
          />
        </div>
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

  document.getElementById('workOverlayClose').addEventListener('click', closeOverlay);

  document.getElementById('workOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeOverlay();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOverlay();
  });

  document.querySelectorAll('.ow-card[data-service]').forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      openOverlay(this.dataset.service);
    });
  });
}

document.addEventListener('DOMContentLoaded', initWorkOverlay);
