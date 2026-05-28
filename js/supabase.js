var supabaseClient = (function () {
  var SUPABASE_URL      = 'https://wcvuxbvpccdufewbbvnz.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdnV4YnZwY2NkdWZld2Jidm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjU4NzMsImV4cCI6MjA5NTQwMTg3M30.lzjbeVAsVSkUkwuNkP6rP0v1N4jUdcDuF4EhcVaRa84';
  try {
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    console.error('Supabase failed to initialise. Is the CDN blocked?', e);
    return null;
  }
})();
