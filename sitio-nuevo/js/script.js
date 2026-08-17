(function(){
  // --- Language toggle ---
  const btnEs = document.getElementById('lang-es');
  const btnEn = document.getElementById('lang-en');
  const nodesEs = document.querySelectorAll('[data-es]');
  const nodesEn = document.querySelectorAll('[data-en]');

  function setLang(lang){
    document.documentElement.setAttribute('lang', lang);
    nodesEs.forEach(el => { el.style.display = (lang === 'es') ? '' : 'none'; });
    nodesEn.forEach(el => { el.style.display = (lang === 'en') ? '' : 'none'; });
    btnEs.classList.toggle('active', lang === 'es');
    btnEn.classList.toggle('active', lang === 'en');
    try { localStorage.setItem('hostflow-lang', lang); } catch(e){}
  }

  let initial = 'es';
  try {
    const saved = localStorage.getItem('hostflow-lang');
    if (saved) initial = saved;
    else if (navigator.language && navigator.language.toLowerCase().indexOf('en') === 0) initial = 'en';
  } catch(e){}

  setLang(initial);
  btnEs.addEventListener('click', () => setLang('es'));
  btnEn.addEventListener('click', () => setLang('en'));

  // --- Scroll reveal ---
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
  // Safety net: a fast/instant scroll (e.g. jumping via keyboard End, or a
  // browser that skips intersection frames) should never leave content stuck
  // invisible. Force-reveal anything left after a short delay.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1800);

  // --- Founder slots note ---
  // NOTE: replace this static text with a live count from Supabase (owners table,
  // is_founder = true) once the site is wired to a small API endpoint. For now it
  // intentionally avoids claiming a specific number of remaining slots.
})();
