function initModal() {
  const overlay   = document.getElementById('modalOverlay');
  const modal     = document.getElementById('loginModal');
  const openBtns  = document.querySelectorAll('.btn-login');
  const closeBtn  = document.getElementById('modalClose');
  if (!overlay || !openBtns.length || !closeBtn) return;

  const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), [href]';
  let lastActiveTrigger = null;

  // ── Open / Close ─────────────────────────────────────────────────────────
  function openModal(trigger) {
    lastActiveTrigger = trigger;
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    resetMagicLink();
    requestAnimationFrame(() => {
      const first = modal.querySelector(FOCUSABLE);
      if (first) first.focus();
    });
  }

  function closeModal() {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lastActiveTrigger) lastActiveTrigger.focus();
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.authState === 'signed-in') return;
      openModal(btn);
    });
  });
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) closeModal();
  });

  // Focus trap
  overlay.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const els = [...modal.querySelectorAll(FOCUSABLE)];
    if (!els.length) return;
    if (e.shiftKey && document.activeElement === els[0]) {
      e.preventDefault(); els[els.length - 1].focus();
    } else if (!e.shiftKey && document.activeElement === els[els.length - 1]) {
      e.preventDefault(); els[0].focus();
    }
  });

  window.addEventListener('leo:close-modal', closeModal);

  // ── Status message ────────────────────────────────────────────────────────
  const statusEl = document.getElementById('modalStatus');
  function setStatus(msg, isError) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = 'modal__status' + (isError ? ' modal__status--error' : ' modal__status--success');
    statusEl.removeAttribute('hidden');
  }
  function clearStatus() {
    if (!statusEl) return;
    statusEl.textContent = '';
    statusEl.setAttribute('hidden', '');
  }

  // ── Magic Link ────────────────────────────────────────────────────────────
  const emailInput = document.getElementById('magicEmail');
  const nameInput  = document.getElementById('userName');
  const phoneInput = document.getElementById('userPhone');
  const sendBtn    = document.getElementById('sendMagicLink');
  const emailRe    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function resetMagicLink() {
    if (nameInput)  nameInput.value  = '';
    if (phoneInput) phoneInput.value = '';
    if (emailInput) emailInput.value = '';
    if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = 'Send Magic Link'; }
    clearStatus();
  }

  async function handleMagicLink() {
    const name  = (nameInput?.value  || '').trim();
    const phone = (phoneInput?.value || '').trim();
    const email = (emailInput?.value || '').trim();

    if (!name)              return setStatus('Please enter your full name.', true);
    if (!phone)             return setStatus('Please enter your phone number.', true);
    if (!emailRe.test(email)) return setStatus('Please enter a valid email address.', true);
    if (!supabaseClient)    return setStatus('Auth service unavailable. Refresh the page.', true);

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending…';
    clearStatus();

    // Save name, phone, email to profiles table
    await supabaseClient.from('profiles').upsert({ email, name, phone }, { onConflict: 'email' });

    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + '/' }
    });

    if (error) {
      setStatus(error.message, true);
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Magic Link';
    } else {
      sendBtn.textContent = '✓ Link sent!';
      setStatus('Check your inbox — click the link to sign in.', false);
    }
  }

  if (sendBtn)    sendBtn.addEventListener('click', handleMagicLink);
  if (emailInput) emailInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleMagicLink(); });

  // ── Google OAuth ──────────────────────────────────────────────────────────
  const googleBtn = document.getElementById('googleLoginBtn');
  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      if (!supabaseClient) return setStatus('Auth service unavailable. Refresh the page.', true);
      googleBtn.disabled = true;
      googleBtn.textContent = 'Redirecting…';
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/' }
      });
      if (error) {
        setStatus(error.message, true);
        googleBtn.disabled = false;
        googleBtn.innerHTML = `<svg class="google-icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg> Continue with Google`;
      }
    });
  }
}
