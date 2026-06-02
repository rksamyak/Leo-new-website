/* ══════════════════════════════════════
   PAGE LOADER — Branded entry + transitions
   ══════════════════════════════════════ */

(function () {

  var WORDS = [
    'Strategy', 'Brand', 'Growth', 'Digital', 'Creative',
    'Campaigns', 'ROI', 'Social', 'Content', 'Leads',
    'Traffic', 'Analytics', 'Launch', 'Scale', 'Convert',
    'Engage', 'Reach', 'Impact', 'Vision', 'Results',
    'Influence', 'Design', 'Media', 'Stories', 'Data',
    'Innovate', 'Perform', 'Connect', 'Inspire', 'Awards'
  ];

  var MIN_DISPLAY_MS = 1600; /* minimum time loader stays visible */
  var startTime = Date.now();
  var hideQueued = false;
  var wordInterval = null;

  /* ── Spawn one falling word into a container ── */
  function spawnWord(container) {
    if (!container) return;
    var word = document.createElement('span');
    word.className = 'loader__word';
    word.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];

    var size     = 9  + Math.random() * 13;          /* 9–22px */
    var leftPct  = 1  + Math.random() * 98;           /* 1–99% */
    var duration = 1900 + Math.random() * 1600;       /* 1.9–3.5s */
    var alpha    = 0.06 + Math.random() * 0.22;       /* 0.06–0.28 */
    /* Mix of purple and white for variety */
    var color = Math.random() > 0.35
      ? 'rgba(192, 132, 252, ' + alpha + ')'
      : 'rgba(255, 255, 255, ' + (alpha * 0.55) + ')';

    word.style.cssText =
      'font-size:' + size + 'px;' +
      'left:' + leftPct + '%;' +
      'animation-duration:' + duration + 'ms;' +
      'color:' + color + ';';

    container.appendChild(word);
    word.addEventListener('animationend', function () { word.remove(); });
  }

  /* ── Start the continuous word-rain loop ── */
  function startWordRain(container) {
    /* initial burst */
    for (var i = 0; i < 14; i++) {
      (function (delay) {
        setTimeout(function () { spawnWord(container); }, delay);
      })(Math.random() * 1200);
    }
    /* ongoing drizzle */
    wordInterval = setInterval(function () {
      if (!document.getElementById('page-loader')) {
        clearInterval(wordInterval);
        return;
      }
      var batch = 1 + Math.floor(Math.random() * 2);
      for (var j = 0; j < batch; j++) {
        (function (d) {
          setTimeout(function () { spawnWord(container); }, d);
        })(Math.random() * 500);
      }
    }, 320);
  }

  /* ── Dismiss the initial page loader ── */
  function hideLoader() {
    if (hideQueued) return;
    hideQueued = true;
    var elapsed = Date.now() - startTime;
    var wait    = Math.max(0, MIN_DISPLAY_MS - elapsed);
    setTimeout(function () {
      var loader = document.getElementById('page-loader');
      if (!loader) return;
      clearInterval(wordInterval);
      loader.classList.add('is-hiding');
      setTimeout(function () { loader.remove(); }, 700);
    }, wait);
  }

  /* ── Page transition: slide in from bottom, then navigate ── */
  function pageTransition(href) {
    /* Don't double-fire */
    if (document.getElementById('page-transition')) return;

    var overlay = document.createElement('div');
    overlay.id = 'page-transition';
    overlay.innerHTML =
      '<div class="loader__words" id="transition-words"></div>' +
      '<div class="loader__glow"></div>' +
      '<img src="images/logo_white.png" alt="Leo Digital" class="loader__logo" />';
    document.body.appendChild(overlay);

    /* Trigger entrance animation */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add('is-entering');
      });
    });

    /* Spawn a quick word burst during transition */
    var tc = document.getElementById('transition-words');
    for (var i = 0; i < 10; i++) {
      (function (d) {
        setTimeout(function () { spawnWord(tc); }, d);
      })(Math.random() * 400);
    }

    /* Navigate after transition completes */
    setTimeout(function () {
      window.location.href = href;
    }, 480);
  }

  /* ── Intercept internal <a> clicks ── */
  function wireTransitions() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href]');
      if (!link) return;

      var href = link.getAttribute('href');
      if (!href) return;
      /* Skip: external URLs, anchors, mailto/tel, blank target */
      if (
        href.charAt(0) === '#'    ||
        href.indexOf('http') === 0 ||
        href.indexOf('mailto') === 0 ||
        href.indexOf('tel') === 0  ||
        link.target === '_blank'
      ) return;

      e.preventDefault();
      pageTransition(href);
    }, true);
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('page-loader');
    if (loader) {
      var words = loader.querySelector('.loader__words');
      startWordRain(words);
    }
    wireTransitions();
  });

  /* Hide when all resources loaded */
  window.addEventListener('load', hideLoader);
  /* Hard failsafe at 4 seconds */
  setTimeout(hideLoader, 4000);

})();
