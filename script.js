/* Hestia Bistró — small UX scripts */

// Hero scroll-fade: background photo + wordmark fade together on scroll
(function heroFade(){
  const photo = document.querySelector('.hero-photo');
  const wordmark = document.querySelector('.hero-wordmark');
  const hero = document.querySelector('.hero');
  if (!hero) return;

  let ticking = false;
  function update(){
    const heroH = hero.offsetHeight;
    const scrolled = Math.max(0, window.scrollY);
    // Fade starts at 35% of hero height, ends at 85% — la imagen aguanta visible un poco más
    const fadeStart = heroH * 0.20;
    const fadeEnd   = heroH * 1.00;
    const t = (scrolled - fadeStart) / (fadeEnd - fadeStart);
    const opacity = Math.max(0, Math.min(1, 1 - t));
    if (photo) photo.style.opacity = opacity;
    if (wordmark) wordmark.style.opacity = opacity;
    ticking = false;
  }
  function onScroll(){
    if (!ticking){
      requestAnimationFrame(update);
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();

// Language toggle (visual only, ES is the only one wired)
(function lang(){
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    // TODO: hook real i18n when CAT/EN copy is ready
  }));
})();

// Menu accordion (Nuestra propuesta)
(function accordion(){
  const rows = document.querySelectorAll('.menu-row');
  rows.forEach(row => {
    const trigger = row.querySelector('.menu-row-trigger');
    if(!trigger) return;
    trigger.addEventListener('click', () => {
      const wasOpen = row.classList.contains('open');
      rows.forEach(r => r.classList.remove('open'));
      if(!wasOpen) row.classList.add('open');
    });
  });
  // Open first row by default
  if(rows[0]) rows[0].classList.add('open');
})();

// Smooth-scroll: account for fixed header offset
(function anchors(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if(!id) return;
      const target = document.getElementById(id);
      if(!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top:y, behavior:'smooth' });
    });
  });
})();

// Dishes carousel — auto-advance every 2 seconds with seamless loop
(function dishesCarousel(){
  const track = document.querySelector('.dishes-track');
  if (!track) return;
  const slides = Array.from(track.children);
  if (slides.length < 4) return;

  const unique = parseInt(track.dataset.unique, 10) || Math.floor(slides.length / 2);
  const TRANSITION = 'transform .9s cubic-bezier(.4,0,.2,1)';
  let index = 0;
  let snapping = false;

  function move(animate){
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 40;
    const offset = -(index * (slideWidth + gap));
    track.style.transition = animate ? TRANSITION : 'none';
    track.style.transform = `translateX(${offset}px)`;
  }

  function tick(){
    if (snapping) return;
    index++;
    move(true);
    if (index >= unique){
      // After this animation completes, snap back to start invisibly
      snapping = true;
      setTimeout(() => {
        index = 0;
        move(false);
        // Force reflow so next transition kicks in
        void track.offsetHeight;
        snapping = false;
      }, 950);
    }
  }

  // Initial setup
  move(false);
  let timer = setInterval(tick, 2000);

  window.addEventListener('resize', () => move(false));

  // Pause when off-screen
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !timer) timer = setInterval(tick, 2000);
      else if (!e.isIntersecting && timer){ clearInterval(timer); timer = null; }
    });
  }, { threshold: 0.1 });
  io.observe(track.parentElement);
})();

// Reveal-on-scroll SOLO para títulos — opt-in vía prefers-reduced-motion off
//
// Animación garantizada incluso al navegar rápido entre páginas:
//   1. Añadir .reveal a los títulos (estado oculto: opacity 0, translateY 28px)
//   2. Esperar 2 frames con requestAnimationFrame anidado — esto fuerza al
//      navegador a pintar el estado inicial ANTES de empezar a observar.
//      Sin este doble-RAF, el navegador puede batchear .reveal + .in en el
//      mismo frame y saltarse la transición.
//   3. Empezar a observar — el IntersectionObserver dispara la callback con
//      el estado .reveal ya pintado, así la transición se ejecuta limpia.
(function reveal(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.08, rootMargin:'0px 0px 200px 0px' });

  const els = document.querySelectorAll(
    '.section-title, .faq-list .faq-item:first-of-type .faq-question, .reservar-placeholder-title'
  );
  // Paso 1: estado inicial .reveal
  els.forEach(el => el.classList.add('reveal'));
  // Paso 2 + 3: dos rAF anidados → primer frame pinta .reveal, segundo
  // frame observa (IO disparará con estado válido para transicionar)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      els.forEach(el => io.observe(el));
    });
  });
})();
