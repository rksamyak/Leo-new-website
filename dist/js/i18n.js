/* ═══════════════════════════════════════════════
   LEO DIGITAL — i18n  (English + Arabic)
   ═══════════════════════════════════════════════ */
(function () {

  /* ── Translation dictionary ───────────────── */
  var T = {
    en: {
      /* Navbar */
      'nav.home'           : 'Home',
      'nav.services'       : 'Services',
      'nav.ourwork'        : 'Our Work',
      'nav.resources'      : 'Resources',
      'nav.insights'       : 'Insights',
      'nav.insights.desc'  : 'Thought leadership',
      'nav.news'           : 'News',
      'nav.news.desc'      : 'Latest updates &amp; press',
      'nav.company'        : 'Company',
      'nav.careers'        : 'Careers',
      'nav.careers.desc'   : 'Work with us',
      'nav.about'          : 'About',
      'nav.about.desc'     : 'Our story and mission',
      'nav.login'          : 'Log in',
      'nav.contact'        : 'Contact',

      /* Footer */
      'ftr.desc'      : 'Crafting digital experiences that drive growth and innovation.',
      'ftr.company'   : 'Company',
      'ftr.about'     : 'About',
      'ftr.careers'   : 'Careers',
      'ftr.news'      : 'News &amp; Updates',
      'ftr.insights'  : 'Insights',
      'ftr.services'  : 'Services',
      'ftr.websites'  : 'Websites &amp; Apps',
      'ftr.creative'  : 'Creative &amp; Digital',
      'ftr.brand'     : 'Brand Launches',
      'ftr.perf'      : 'Performance Marketing',
      'ftr.films'     : 'Films &amp; Shoots',
      'ftr.innov'     : 'Innovations',
      'ftr.connect'   : 'Connect',
      'ftr.linkedin'  : 'LinkedIn',
      'ftr.instagram' : 'Instagram',
      'ftr.facebook'  : 'Facebook',
      'ftr.youtube'   : 'YouTube',
      'ftr.contact'   : 'Contact',
      'ftr.legal'     : '© 2026 Leo Digital Ltd. All rights reserved.',
      'ftr.privacy'   : 'Privacy Policy',
      'ftr.terms'     : 'Terms of Service',
      'ftr.cookies'   : 'Cookie Settings',

      /* Home hero */
      'home.eyebrow'          : 'AI-Powered Growth Agency',
      'home.hero.sub'         : 'Scale your brand faster —',
      'home.cta.primary'      : 'Start Growing',
      'home.cta.ghost'        : 'View Our Work',
      'home.trust'            : 'Trusted by 400+ brands worldwide',
      'home.stat1'            : 'Brands',
      'home.stat2'            : 'Reach / mo',
      'home.stat3'            : 'Retention',
      /* Home SEH */
      'home.seh.label'        : 'Leo Digital',
      'home.seh.title'        : 'Campaigns That<br>Move People',
      'home.seh.hint'         : 'Scroll to expand',
      /* Home Approach */
      'home.app.eyebrow'      : 'Our Approach',
      'home.app.title'        : 'Strategy meets<br>creativity',
      'home.app.text'         : 'At Leo Digital, every campaign begins with a deep understanding of your brand, your audience, and the goals you\'re chasing. We combine data science with bold creative to build experiences that convert and endure.',
      'home.app.col1.h'       : 'Data-Driven',
      'home.app.col1.p'       : 'Every decision is backed by real insights and measurable outcomes — no guesswork, just results.',
      'home.app.col2.h'       : 'Creative First',
      'home.app.col2.p'       : 'Bold ideas that capture attention and tell your brand story in ways your audience won\'t forget.',
      'home.app.col3.h'       : 'Always-On',
      'home.app.col3.p'       : 'Continuous optimisation across every channel, every hour. Your brand never sleeps and neither do we.',
      /* Home Services */
      'home.srv.eyebrow'      : 'What We Do',
      'home.srv.title'        : 'Capabilities<br>that convert',
      'home.srv.sub'          : 'Eight disciplines. One integrated team. Built to grow ambitious brands.',
      /* Home Partners */
      'home.prt.eyebrow'      : 'Our Clients',
      'home.prt.title'        : 'Trusted by <em>India\'s</em> leading brands',
      'home.prt.sub'          : 'From media giants to Fortune 500 companies — brands that shape industries choose Leo Digital.',
      /* Home Stats */
      'home.stats.eyebrow'    : 'Real Results',
      'home.stats.title'      : 'Numbers that<br>speak for themselves',

      /* Careers */
      'cr.badge'          : 'Leo Digital Communication — Careers',
      'cr.hero.sub'       : 'Best Global Agency &nbsp;·&nbsp; Flexible &amp; Remote-First &nbsp;·&nbsp; 15 Open Roles',
      'cr.cta.roles'      : 'See Open Roles',
      'cr.cta.apply'      : 'Apply Now',
      'cr.perks.label'    : 'Why Join Us',
      'cr.perks.title'    : 'Life at Leo Digital Communication',
      'cr.perk1.title'    : 'Remote-First',
      'cr.perk1.desc'     : 'Work from anywhere in the world. We hire for talent, not location.',
      'cr.perk2.title'    : 'High-Impact Work',
      'cr.perk2.desc'     : 'Work on campaigns and products seen by millions across global brands.',
      'cr.perk3.title'    : 'AI-Powered Tools',
      'cr.perk3.desc'     : 'Access cutting-edge AI tools to supercharge your creativity and output.',
      'cr.perk4.title'    : 'Creative Freedom',
      'cr.perk4.desc'     : 'Bring your boldest ideas. We champion autonomy and original thinking.',
      'cr.perk5.title'    : 'Fast Career Growth',
      'cr.perk5.desc'     : 'Clear growth paths, mentorship, and a learning budget to accelerate your career.',
      'cr.perk6.title'    : 'Collaborative Culture',
      'cr.perk6.desc'     : 'A team that celebrates wins, supports growth, and loves great work.',
      'cr.roles.label'    : 'Open Positions',
      'cr.roles.title'    : 'Find Your Role',
      'cr.roles.sub'      : '15 open positions across Technology, Creative, Marketing &amp; more.',
      'cr.apply.label'    : 'Apply Now',
      'cr.apply.title'    : 'Ready to Join<br>the Team?',
      'cr.apply.desc'     : 'Fill in the form and we\'ll get back to you within 2 business days.',
      'cr.check1'         : 'Fast-track review process',
      'cr.check2'         : 'All applications acknowledged',
      'cr.check3'         : 'Flexible start dates available',
      'cr.check4'         : 'Remote-friendly interviews',
      'cr.form.name'      : 'Full Name',
      'cr.form.email'     : 'Email Address',
      'cr.form.phone'     : 'Phone Number',
      'cr.form.role'      : 'Job Role',
      'cr.form.msg'       : 'Tell us about yourself <span class="cr-form__optional">(optional)</span>',
      'cr.form.resume'    : 'Resume / CV <span class="cr-form__optional">(optional)</span>',
      'cr.form.ph.name'   : 'Your full name',
      'cr.form.ph.email'  : 'you@email.com',
      'cr.form.ph.phone'  : '+971 50 123 4567 / +91 98765 43210',
      'cr.form.ph.role'   : 'Choose your Job Role',
      'cr.form.ph.msg'    : 'Share your experience, portfolio links, or why you\'d like to join Leo Digital Communication…',
      'cr.form.submit'    : 'Submit Application',
      'cr.success.title'  : 'Application Received!',
      'cr.success.text'   : 'Thank you for applying. We\'ll review your details and be in touch within 2 business days.',

      /* Offices */
      'offices.eyebrow'        : 'Global Presence',
      'offices.title'          : 'Two Countries.<br>One Team.',
      'offices.sub'            : 'With offices in India and Dubai, we deliver world-class digital campaigns across South Asia and the Middle East.',
      'offices.india.badge'    : 'Headquarters',
      'offices.india.city'     : 'India',
      'offices.india.region'   : 'South Asia — Bengaluru',
      'offices.india.desc'     : 'Our founding home. Where strategy, creativity, and technology come together to serve 400+ brands.',
      'offices.india.status'   : 'Active — Asia/Kolkata (IST)',
      'offices.dubai.badge'    : 'Now in Dubai',
      'offices.dubai.city'     : 'Dubai',
      'offices.dubai.region'   : 'Middle East — UAE',
      'offices.dubai.desc'     : 'Expanding our reach across the Gulf. Bringing bold digital campaigns to brands in the UAE and wider GCC region.',
      'offices.dubai.status'   : 'Active — Asia/Dubai (GST)',

      /* Our Work */
      'ow.badge'  : 'Our Work',

      /* Insights */
      'ins.badge' : 'Insights',

      /* News */
      'news.badge': 'News',
    },

    ar: {
      /* Navbar */
      'nav.home'           : 'الرئيسية',
      'nav.services'       : 'الخدمات',
      'nav.ourwork'        : 'أعمالنا',
      'nav.resources'      : 'الموارد',
      'nav.insights'       : 'المقالات',
      'nav.insights.desc'  : 'قيادة فكرية',
      'nav.news'           : 'الأخبار',
      'nav.news.desc'      : 'آخر الأخبار والإعلام',
      'nav.company'        : 'الشركة',
      'nav.careers'        : 'الوظائف',
      'nav.careers.desc'   : 'اعمل معنا',
      'nav.about'          : 'عن الشركة',
      'nav.about.desc'     : 'قصتنا ورسالتنا',
      'nav.login'          : 'تسجيل الدخول',
      'nav.contact'        : 'تواصل معنا',

      /* Footer */
      'ftr.desc'      : 'نصنع تجارب رقمية تدفع النمو والابتكار.',
      'ftr.company'   : 'الشركة',
      'ftr.about'     : 'عن الشركة',
      'ftr.careers'   : 'الوظائف',
      'ftr.news'      : 'الأخبار والتحديثات',
      'ftr.insights'  : 'المقالات',
      'ftr.services'  : 'الخدمات',
      'ftr.websites'  : 'المواقع والتطبيقات',
      'ftr.creative'  : 'الإبداعي والرقمي',
      'ftr.brand'     : 'إطلاق العلامات التجارية',
      'ftr.perf'      : 'التسويق الأدائي',
      'ftr.films'     : 'الأفلام والتصوير',
      'ftr.innov'     : 'الابتكارات',
      'ftr.connect'   : 'تواصل',
      'ftr.linkedin'  : 'لينكد إن',
      'ftr.instagram' : 'إنستغرام',
      'ftr.facebook'  : 'فيسبوك',
      'ftr.youtube'   : 'يوتيوب',
      'ftr.contact'   : 'تواصل معنا',
      'ftr.legal'     : '© 2026 ليو ديجيتال المحدودة. جميع الحقوق محفوظة.',
      'ftr.privacy'   : 'سياسة الخصوصية',
      'ftr.terms'     : 'شروط الخدمة',
      'ftr.cookies'   : 'إعدادات ملفات تعريف الارتباط',

      /* Home hero */
      'home.eyebrow'          : 'وكالة نمو مدعومة بالذكاء الاصطناعي',
      'home.hero.sub'         : 'نمّ علامتك التجارية بشكل أسرع —',
      'home.cta.primary'      : 'ابدأ النمو',
      'home.cta.ghost'        : 'شاهد أعمالنا',
      'home.trust'            : 'موثوق من قبل أكثر من 400 علامة تجارية حول العالم',
      'home.stat1'            : 'علامة تجارية',
      'home.stat2'            : 'وصول / شهريًا',
      'home.stat3'            : 'نسبة الاحتفاظ',
      /* Home SEH */
      'home.seh.label'        : 'ليو ديجيتال',
      'home.seh.title'        : 'حملات تُحرّك<br>الناس',
      'home.seh.hint'         : 'مرر للتوسع',
      /* Home Approach */
      'home.app.eyebrow'      : 'نهجنا',
      'home.app.title'        : 'الاستراتيجية تلتقي<br>بالإبداع',
      'home.app.text'         : 'في ليو ديجيتال، تبدأ كل حملة بفهم عميق لعلامتك التجارية وجمهورك والأهداف التي تسعى إليها. نجمع علم البيانات مع الإبداع الجريء لبناء تجارب تُحوّل وتدوم.',
      'home.app.col1.h'       : 'مبني على البيانات',
      'home.app.col1.p'       : 'كل قرار مدعوم برؤى حقيقية ونتائج قابلة للقياس — لا تخمين، فقط نتائج.',
      'home.app.col2.h'       : 'الإبداع أولاً',
      'home.app.col2.p'       : 'أفكار جريئة تلفت الانتباه وتروي قصة علامتك التجارية بطرق لن ينساها جمهورك.',
      'home.app.col3.h'       : 'دائمًا في الخدمة',
      'home.app.col3.p'       : 'تحسين مستمر عبر كل قناة، كل ساعة. علامتك التجارية لا تنام ونحن كذلك.',
      /* Home Services */
      'home.srv.eyebrow'      : 'ماذا نفعل',
      'home.srv.title'        : 'قدرات<br>تُحوّل',
      'home.srv.sub'          : 'ثمانية تخصصات. فريق متكامل واحد. مبني لتنمية العلامات التجارية الطموحة.',
      /* Home Partners */
      'home.prt.eyebrow'      : 'عملاؤنا',
      'home.prt.title'        : 'موثوق من قبل العلامات التجارية <em>الرائدة</em>',
      'home.prt.sub'          : 'من عمالقة الإعلام إلى شركات Fortune 500 — العلامات التي تشكّل الصناعات تختار ليو ديجيتال.',
      /* Home Stats */
      'home.stats.eyebrow'    : 'نتائج حقيقية',
      'home.stats.title'      : 'أرقام<br>تتحدث عن نفسها',

      /* Careers */
      'cr.badge'          : 'ليو ديجيتال للتواصل — الوظائف',
      'cr.hero.sub'       : 'أفضل وكالة عالمية &nbsp;·&nbsp; مرن وبعيد أولاً &nbsp;·&nbsp; 15 وظيفة شاغرة',
      'cr.cta.roles'      : 'الوظائف المتاحة',
      'cr.cta.apply'      : 'قدّم الآن',
      'cr.perks.label'    : 'لماذا تنضم إلينا',
      'cr.perks.title'    : 'الحياة في ليو ديجيتال للتواصل',
      'cr.perk1.title'    : 'بعيد أولاً',
      'cr.perk1.desc'     : 'اعمل من أي مكان في العالم. نوظّف للموهبة، لا للموقع.',
      'cr.perk2.title'    : 'عمل عالي التأثير',
      'cr.perk2.desc'     : 'اعمل على حملات ومنتجات يراها الملايين عبر العلامات التجارية العالمية.',
      'cr.perk3.title'    : 'أدوات مدعومة بالذكاء الاصطناعي',
      'cr.perk3.desc'     : 'احصل على أحدث أدوات الذكاء الاصطناعي لتعزيز إبداعك وإنتاجيتك.',
      'cr.perk4.title'    : 'حرية إبداعية',
      'cr.perk4.desc'     : 'أحضر أجرأ أفكارك. نؤمن بالاستقلالية والتفكير الأصيل.',
      'cr.perk5.title'    : 'نمو مهني سريع',
      'cr.perk5.desc'     : 'مسارات نمو واضحة وإرشاد وميزانية تعلّم لتسريع مسيرتك المهنية.',
      'cr.perk6.title'    : 'ثقافة تعاونية',
      'cr.perk6.desc'     : 'فريق يحتفل بالإنجازات ويدعم النمو ويعشق العمل الرائع.',
      'cr.roles.label'    : 'الوظائف المتاحة',
      'cr.roles.title'    : 'اعثر على دورك',
      'cr.roles.sub'      : '15 وظيفة شاغرة في التكنولوجيا والإبداع والتسويق وأكثر.',
      'cr.apply.label'    : 'قدّم الآن',
      'cr.apply.title'    : 'مستعد للانضمام<br>إلى الفريق؟',
      'cr.apply.desc'     : 'املأ النموذج وسنتواصل معك خلال يومي عمل.',
      'cr.check1'         : 'عملية مراجعة سريعة',
      'cr.check2'         : 'جميع الطلبات مُعترف بها',
      'cr.check3'         : 'تواريخ بدء مرنة متاحة',
      'cr.check4'         : 'مقابلات مناسبة للعمل عن بُعد',
      'cr.form.name'      : 'الاسم الكامل',
      'cr.form.email'     : 'البريد الإلكتروني',
      'cr.form.phone'     : 'رقم الهاتف',
      'cr.form.role'      : 'المسمى الوظيفي',
      'cr.form.msg'       : 'أخبرنا عن نفسك <span class="cr-form__optional">(اختياري)</span>',
      'cr.form.resume'    : 'السيرة الذاتية <span class="cr-form__optional">(اختياري)</span>',
      'cr.form.ph.name'   : 'اسمك الكامل',
      'cr.form.ph.email'  : 'بريدك@الإلكتروني.com',
      'cr.form.ph.phone'  : '+971 50 123 4567 / +91 98765 43210',
      'cr.form.ph.role'   : 'اختر المسمى الوظيفي',
      'cr.form.ph.msg'    : 'شارك خبرتك وروابط ملفك الشخصي أو سبب رغبتك في الانضمام إلى ليو ديجيتال للتواصل…',
      'cr.form.submit'    : 'إرسال الطلب',
      'cr.success.title'  : 'تم استلام طلبك!',
      'cr.success.text'   : 'شكرًا على تقديمك. سنراجع تفاصيلك ونتواصل معك خلال يومي عمل.',

      /* Offices */
      'offices.eyebrow'        : 'حضور عالمي',
      'offices.title'          : 'دولتان.<br>فريق واحد.',
      'offices.sub'            : 'بمكاتب في الهند ودبي، نقدّم حملات رقمية عالمية المستوى عبر جنوب آسيا والشرق الأوسط.',
      'offices.india.badge'    : 'المقر الرئيسي',
      'offices.india.city'     : 'الهند',
      'offices.india.region'   : 'جنوب آسيا — بنغالور',
      'offices.india.desc'     : 'موطننا الأصلي. حيث تتلاقى الاستراتيجية والإبداع والتكنولوجيا لخدمة أكثر من 400 علامة تجارية.',
      'offices.india.status'   : 'نشط — آسيا/كولكاتا (IST)',
      'offices.dubai.badge'    : 'الآن في دبي',
      'offices.dubai.city'     : 'دبي',
      'offices.dubai.region'   : 'الشرق الأوسط — الإمارات',
      'offices.dubai.desc'     : 'نوسّع حضورنا عبر منطقة الخليج. نجلب حملات رقمية جريئة للعلامات التجارية في الإمارات ومنطقة الخليج العربي.',
      'offices.dubai.status'   : 'نشط — آسيا/دبي (GST)',

      /* Our Work */
      'ow.badge'  : 'أعمالنا',

      /* Insights */
      'ins.badge' : 'المقالات',

      /* News */
      'news.badge': 'الأخبار',
    }
  };

  /* ── Language engine ──────────────────────── */
  var currentLang = localStorage.getItem('ld-lang') || 'en';

  function t(key) {
    return (T[currentLang] && T[currentLang][key] !== undefined)
      ? T[currentLang][key]
      : (T['en'][key] || key);
  }

  function loadArabicFont() {
    if (document.getElementById('ld-cairo-font')) return;
    var link = document.createElement('link');
    link.id   = 'ld-cairo-font';
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('ld-lang', lang);

    var isRTL = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir  = isRTL ? 'rtl' : 'ltr';

    if (isRTL) loadArabicFont();

    /* Text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'));
      if (val !== undefined) el.innerHTML = val;
    });

    /* Placeholders */
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-ph'));
      if (val !== undefined) el.setAttribute('placeholder', val);
    });

    /* Sync switcher pill state */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
  }

  function init() {
    applyLang(currentLang);

    /* Wire every switcher on the page */
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (!btn) return;
      var lang = btn.dataset.lang;
      if (lang && lang !== currentLang) applyLang(lang);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.LeoI18n = { t: t, apply: applyLang };

})();
