function initHeroAI() {
  const section = document.querySelector('.hero-ai');
  if (!section) return;

  // ── Particle Canvas ──────────────────────────────────────────────────
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrameId;

    function resizeCanvas() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    function createParticle() {
      return {
        x:          Math.random() * canvas.width,
        y:          Math.random() * canvas.height,
        speed:      Math.random() / 5 + 0.1,
        opacity:    1,
        fadeStart:  Date.now() + Math.random() * 600 + 100,
        fadingOut:  false,

        reset() {
          this.x         = Math.random() * canvas.width;
          this.y         = Math.random() * canvas.height;
          this.speed     = Math.random() / 5 + 0.1;
          this.opacity   = 1;
          this.fadeStart = Date.now() + Math.random() * 600 + 100;
          this.fadingOut = false;
        },

        update() {
          this.y -= this.speed;
          if (this.y < 0) { this.reset(); return; }
          if (!this.fadingOut && Date.now() > this.fadeStart) this.fadingOut = true;
          if (this.fadingOut) {
            this.opacity -= 0.008;
            if (this.opacity <= 0) this.reset();
          }
        },

        draw() {
          ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${this.opacity})`;
          ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
        }
      };
    }

    function initParticles() {
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      particles = [];
      for (let i = 0; i < count; i++) particles.push(createParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
  }

  // ── Word-flip subtitle ──────────────────────────────────────────────
  const flipEl = document.getElementById('heroFlipWord');
  if (flipEl) {
    const words = [
      'data-driven strategies',
      'creative campaigns',
      'brand storytelling',
      'performance marketing'
    ];
    let idx = 0;

    setInterval(() => {
      flipEl.classList.add('flip-out');
      setTimeout(() => {
        idx = (idx + 1) % words.length;
        flipEl.textContent = words[idx];
        flipEl.classList.remove('flip-out');
        flipEl.classList.add('flip-in');
        setTimeout(() => flipEl.classList.remove('flip-in'), 400);
      }, 280);
    }, 2800);
  }

  // ── Start Growing button pulse ───────────────────────────────────────
  const micBtn = document.getElementById('heroMicBtn');
  if (micBtn) {
    micBtn.addEventListener('click', () => {
      micBtn.classList.add('hero-ai__btn--listening');
      setTimeout(() => micBtn.classList.remove('hero-ai__btn--listening'), 2000);
    });
  }

  // ── Mid-spot gold mode toggle ────────────────────────────────────────
  const midspot = document.getElementById('heroMidspot');
  if (midspot) {
    let goldMode = false;
    const toggle = () => {
      goldMode = !goldMode;
      section.classList.toggle('gold-mode', goldMode);
      midspot.style.boxShadow = goldMode ? '0 0 1em 0 #d8bd10' : '0 0 1em 0 #98c0ef';
    };
    midspot.addEventListener('click', toggle);
    midspot.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  }
}
