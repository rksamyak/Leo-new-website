function initHeroAI() {
  const section = document.querySelector('.hero-ai');
  if (!section) return;

  // Mic button visual pulse on click
  const micBtn = document.getElementById('heroMicBtn');
  if (micBtn) {
    micBtn.addEventListener('click', () => {
      micBtn.classList.add('hero-ai__btn--listening');
      setTimeout(() => micBtn.classList.remove('hero-ai__btn--listening'), 2000);
    });
  }

  // Randomise waveform bar heights continuously for a more organic feel
  const bars = section.querySelectorAll('.hero-ai__bar');
  bars.forEach((bar, i) => {
    const randomiseDuration = () => {
      const dur = (0.6 + Math.random() * 0.9).toFixed(2) + 's';
      const delay = (Math.random() * 0.4).toFixed(2) + 's';
      bar.style.animationDuration = dur;
      bar.style.animationDelay   = delay;
      // re-randomise after each cycle so it never feels looped
      setTimeout(randomiseDuration, (parseFloat(dur) + parseFloat(delay)) * 1000);
    };
    setTimeout(randomiseDuration, i * 80);
  });

  // Pause ticker on mobile touch start, resume on touch end
  const track = section.querySelector('.hero-ai__ticker-track');
  if (track) {
    track.addEventListener('touchstart', () => {
      track.style.animationPlayState = 'paused';
    }, { passive: true });
    track.addEventListener('touchend', () => {
      track.style.animationPlayState = 'running';
    }, { passive: true });
  }
}
