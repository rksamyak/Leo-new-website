function initModal() {
  const overlay  = document.getElementById('modalOverlay');
  const modal    = document.getElementById('loginModal');
  const openBtns = document.querySelectorAll('.btn-login');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay || !openBtns.length || !closeBtn) return;

  const title    = document.getElementById('modalTitle');
  const subtitle = document.getElementById('modalSubtitle');

  const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), [href]';

  let lastActiveTrigger = null;

  // ── Open / Close ──────────────────────────────────────────────────────────
  function openModal(trigger) {
    lastActiveTrigger = trigger;
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      const first = modal.querySelector(FOCUSABLE);
      if (first) first.focus();
    });
  }

  function closeModal() {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lastActiveTrigger) {
      lastActiveTrigger.focus();
    } else if (openBtns[0]) {
      openBtns[0].focus();
    }
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

  window.addEventListener('leo:close-modal', () => {
    if (!overlay.hasAttribute('hidden')) closeModal();
  });

  // ── Screen navigation ─────────────────────────────────────────────────────
  const screens = {
    signin:    document.getElementById('screenSignin'),
    signup:    document.getElementById('screenSignup'),
    forgot:    document.getElementById('screenForgot'),
    otp:       document.getElementById('screenOtp'),
    otpVerify: document.getElementById('screenOtpVerify'),
  };

  const headers = {
    signin:    { title: 'Welcome Back',    subtitle: 'Sign in to your account' },
    signup:    { title: 'Create Account',  subtitle: 'Join Leo Digital today' },
    forgot:    { title: 'Reset Password',  subtitle: 'We will email you a link' },
    otp:       { title: 'Email OTP',       subtitle: 'Passwordless sign in' },
    otpVerify: { title: 'Enter Code',      subtitle: 'Check your inbox' },
  };

  function showScreen(name) {
    Object.values(screens).forEach(s => s && s.setAttribute('hidden', ''));
    if (screens[name]) screens[name].removeAttribute('hidden');
    if (title)    title.textContent    = headers[name].title;
    if (subtitle) subtitle.textContent = headers[name].subtitle;
    clearAllErrors();
    const first = screens[name] && screens[name].querySelector(FOCUSABLE);
    if (first) setTimeout(() => first.focus(), 50);
  }

  // ── Error helpers ─────────────────────────────────────────────────────────
  function setError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }
  function clearAllErrors() {
    ['siError','suError','fpError','otpReqError','otpVerifyError'].forEach(id => setError(id, ''));
  }

  // ── Validation ────────────────────────────────────────────────────────────
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function validEmail(v) { return emailRe.test(v.trim()); }

  // ── Password eye toggle ───────────────────────────────────────────────────
  function wireEye(eyeId, inputId) {
    const eye = document.getElementById(eyeId);
    const inp = document.getElementById(inputId);
    if (!eye || !inp) return;
    eye.addEventListener('click', () => {
      inp.type = inp.type === 'password' ? 'text' : 'password';
    });
  }
  wireEye('siEye', 'siPass');
  wireEye('suEye', 'suPass');

  // ── Screen switches ───────────────────────────────────────────────────────
  const on = (id, cb) => { const el = document.getElementById(id); if (el) el.addEventListener('click', cb); };
  on('goSignup', () => showScreen('signup'));
  on('goSignin', () => showScreen('signin'));
  on('goForgot', () => showScreen('forgot'));
  on('fpBack',   () => showScreen('signin'));
  on('goOtp',    () => showScreen('otp'));
  on('otpBack',  () => showScreen('signin'));

  // ── Sign In ───────────────────────────────────────────────────────────────
  on('siSubmit', async () => {
    const email = (document.getElementById('siEmail')?.value || '').trim();
    const pass  =  document.getElementById('siPass')?.value  || '';
    if (!validEmail(email)) return setError('siError', 'Enter a valid email.');
    if (pass.length < 6)    return setError('siError', 'Password must be at least 6 characters.');
    if (!supabaseClient)    return setError('siError', 'Auth service unavailable. Refresh page.');

    const btn = document.getElementById('siSubmit');
    btn.disabled = true; btn.textContent = 'Signing in…';
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password: pass });
    if (error) {
      setError('siError', error.message);
      btn.disabled = false; btn.textContent = 'Sign In';
    }
  });

  // ── Sign Up ───────────────────────────────────────────────────────────────
  on('suSubmit', async () => {
    const email = (document.getElementById('suEmail')?.value || '').trim();
    const pass  =  document.getElementById('suPass')?.value  || '';
    if (!validEmail(email)) return setError('suError', 'Enter a valid email.');
    if (pass.length < 6)    return setError('suError', 'Password must be at least 6 characters.');
    if (!supabaseClient)    return setError('suError', 'Auth service unavailable. Refresh page.');

    const btn = document.getElementById('suSubmit');
    btn.disabled = true; btn.textContent = 'Creating account…';
    const { error } = await supabaseClient.auth.signUp({ email, password: pass });
    if (error) {
      setError('suError', error.message);
      btn.disabled = false; btn.textContent = 'Create Account';
    } else {
      btn.textContent = '✓ Check your email to confirm';
    }
  });

  // ── Forgot Password ───────────────────────────────────────────────────────
  on('fpSubmit', async () => {
    const email = (document.getElementById('fpEmail')?.value || '').trim();
    if (!validEmail(email)) return setError('fpError', 'Enter a valid email.');
    if (!supabaseClient)    return setError('fpError', 'Auth service unavailable. Refresh page.');

    const btn = document.getElementById('fpSubmit');
    btn.disabled = true; btn.textContent = 'Sending…';
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/'
    });
    if (error) {
      setError('fpError', error.message);
      btn.disabled = false; btn.textContent = 'Send Reset Link';
    } else {
      btn.textContent = '✓ Reset link sent — check your inbox';
    }
  });

  // ── OTP: Send code ────────────────────────────────────────────────────────
  let otpEmailUsed = '';

  async function sendOtp() {
    const email = (document.getElementById('otpEmail')?.value || '').trim();
    if (!validEmail(email)) return setError('otpReqError', 'Enter a valid email.');
    if (!supabaseClient)    return setError('otpReqError', 'Auth service unavailable. Refresh page.');

    const btn = document.getElementById('otpSend');
    btn.disabled = true; btn.textContent = 'Sending…';
    const { error } = await supabaseClient.auth.signInWithOtp({ email });
    if (error) {
      setError('otpReqError', error.message);
      btn.disabled = false; btn.textContent = 'Send Code';
    } else {
      otpEmailUsed = email;
      const desc = document.getElementById('otpSentDesc');
      if (desc) desc.textContent = 'Code sent to ' + email + '. Enter it below.';
      showScreen('otpVerify');
    }
  }

  on('otpSend',   sendOtp);
  on('otpResend', () => {
    showScreen('otp');
    document.getElementById('otpEmail').value = otpEmailUsed;
  });

  // ── OTP: Verify code ─────────────────────────────────────────────────────
  function setupOtpBoxes() {
    const boxes = document.querySelectorAll('.modal__otp-box');
    boxes.forEach((box, i) => {
      box.addEventListener('input', () => {
        box.value = box.value.replace(/\D/g, '').slice(-1);
        box.classList.toggle('filled', !!box.value);
        if (box.value && i < boxes.length - 1) boxes[i + 1].focus();
      });
      box.addEventListener('keydown', e => {
        if (e.key === 'Backspace' && !box.value && i > 0) boxes[i - 1].focus();
      });
      box.addEventListener('paste', e => {
        e.preventDefault();
        const digits = (e.clipboardData.getData('text').replace(/\D/g, '')).slice(0, 6).split('');
        digits.forEach((d, j) => { if (boxes[i + j]) { boxes[i + j].value = d; boxes[i + j].classList.add('filled'); } });
        const next = boxes[Math.min(i + digits.length, boxes.length - 1)];
        if (next) next.focus();
      });
    });
  }
  setupOtpBoxes();

  on('otpVerify', async () => {
    const boxes = [...document.querySelectorAll('.modal__otp-box')];
    const token = boxes.map(b => b.value).join('');
    if (token.length < 6) return setError('otpVerifyError', 'Enter all 6 digits.');
    if (!supabaseClient)  return setError('otpVerifyError', 'Auth service unavailable.');

    const btn = document.getElementById('otpVerify');
    btn.disabled = true; btn.textContent = 'Verifying…';
    const { error } = await supabaseClient.auth.verifyOtp({
      email: otpEmailUsed,
      token,
      type: 'email'
    });
    if (error) {
      setError('otpVerifyError', error.message);
      btn.disabled = false; btn.textContent = 'Verify Code';
    }
  });

  // ── Enter key submits active screen ──────────────────────────────────────
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (e.target.classList.contains('modal__otp-box')) return;
    const map = { screenSignin: 'siSubmit', screenSignup: 'suSubmit', screenForgot: 'fpSubmit', screenOtp: 'otpSend' };
    const active = Object.entries(screens).find(([, s]) => s && !s.hasAttribute('hidden'));
    if (active) {
      const screenEl = active[1];
      const btnId = map[screenEl.id];
      if (btnId) document.getElementById(btnId)?.click();
    }
  });
}
