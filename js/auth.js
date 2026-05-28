(function () {
  function getBtns() { return document.querySelectorAll('.btn-login'); }

  function setSignedIn(user) {
    const btns = getBtns();
    const name   = (user.user_metadata?.full_name || user.email || '').split(' ')[0];
    const avatar = user.user_metadata?.avatar_url;
    btns.forEach(btn => {
      btn.innerHTML = avatar
        ? `<img src="${avatar}" alt="${name}" style="width:22px;height:22px;border-radius:50%;object-fit:cover;margin-right:6px;vertical-align:middle;">${name} &nbsp;·&nbsp; Sign Out`
        : `${name} &nbsp;·&nbsp; Sign Out`;
      btn.title = user.email;
      btn.dataset.authState = 'signed-in';
    });
  }

  function setSignedOut() {
    const btns = getBtns();
    btns.forEach(btn => {
      btn.textContent = 'Login';
      btn.title = '';
      btn.dataset.authState = 'signed-out';
    });
  }

  // Intercept navbar button click in capture phase so it fires before modal.js
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.btn-login');
    if (!btn || btn.dataset.authState !== 'signed-in') return;
    e.stopImmediatePropagation();
    await supabaseClient.auth.signOut();
  }, true);

  // React to auth state changes (sign-in from Google redirect or magic link)
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
      setSignedIn(session.user);
      window.dispatchEvent(new CustomEvent('leo:close-modal'));
    } else if (event === 'SIGNED_OUT') {
      setSignedOut();
    }
  });

  // Restore session on page load
  supabaseClient.auth.getSession().then(({ data: { session } }) => {
    if (session) setSignedIn(session.user);
  });
})();
