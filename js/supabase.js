var supabaseClient = (function () {
  var SUPABASE_URL      = 'https://welyjlxfgwqziscjwpom.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlbHlqbHhmZ3dxemlzY2p3cG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MTgwMjIsImV4cCI6MjA5NTk5NDAyMn0.9339RlVSu0tnyoNf1O8r2--PWu-HoWOf96gQXT6bURI';
  try {
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    console.error('Supabase failed to initialise. Is the CDN blocked?', e);
    return null;
  }
})();
