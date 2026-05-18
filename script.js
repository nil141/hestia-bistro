/* Hestia Bistró — small UX scripts */

// Mobile bottom nav: anchor it to the visualViewport bottom (iOS Safari address-bar fix)
(function mobileNavAnchor(){
  const nav = document.querySelector('.nav-center');
  if (!nav || !window.visualViewport) return;

  const MOBILE_MAX = 768;
  const originalParent = nav.parentElement;
  const originalNextSibling = nav.nextElementSibling;
  let movedToBody = false;

  function shouldActivate(){
    return window.innerWidth <= MOBILE_MAX;
  }

  function ensureLocation(activate){
    if (activate && !movedToBody){
      document.body.appendChild(nav);
      movedToBody = true;
    } else if (!activate && movedToBody){
      // Restore to original DOM position
      if (originalNextSibling) originalParent.insertBefore(nav, originalNextSibling);
      else originalParent.appendChild(nav);
      nav.removeAttribute('style');
      movedToBody = false;
    }
  }

  function update(){
    if (!shouldActivate()){
      ensureLocation(false);
      return;
    }
    ensureLocation(true);
    const vv = window.visualViewport;
    const navH = nav.offsetHeight;
    // Position in document coordinates so it tracks scroll naturally,
    // pinned to the bottom of the current visual viewport
    const top = (window.scrollY + vv.offsetTop + vv.height) - navH;
    nav.style.position = 'absolute';
    nav.style.top = top + 'px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.bottom = 'auto';
    nav.style.transform = 'none';
    nav.style.zIndex = '60';
  }

  let rafId = null;
  function onChange(){
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      update();
    });
  }

  window.visualViewport.addEventListener('resize', onChange);
  window.visualViewport.addEventListener('scroll', onChange);
  window.addEventListener('scroll', onChange, { passive: true });
  window.addEventListener('resize', onChange);
  window.addEventListener('orientationchange', onChange);
  // Initial position
  requestAnimationFrame(update);
})();


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
    // Fully visible at top, fully transparent at ~70% of hero height
    const fadeDistance = heroH * 0.7;
    const opacity = Math.max(0, Math.min(1, 1 - scrolled / fadeDistance));
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

// Header: solid background once scrolled past hero
(function header(){
  const h = document.getElementById('siteHeader');
  if(!h) return;
  const onScroll = () => {
    h.classList.toggle('scrolled', window.scrollY > 60);
  };
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
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

// Reveal-on-scroll for sections — opt-in via prefers-reduced-motion off
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

  document.querySelectorAll(
    '.block-split, .bio-row, .full-image, .propuesta, .food-pair, .cta-strip'
  ).forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
  // Reveal anything already in/near the viewport on first paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 200) el.classList.add('in');
    });
  });
})();
