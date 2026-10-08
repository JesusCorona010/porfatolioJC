(function(){
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.form-submit');
    const originalText = btn.textContent;

    btn.textContent = '¡Mensaje listo! →';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 2200);
  });
})();

(function(){
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');
  let w, h;
  let orbs;

  function resize(){
    w = hero.offsetWidth;
    h = hero.offsetHeight;
    canvas.width = w * devicePixelRatio;
    canvas.height = h * devicePixelRatio;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    orbs = [
      { x: w * 0.18, y: h * 0.30, r: Math.max(w, h) * 0.32, vx: 0.06, vy: 0.03, alpha: 0.16 },
      { x: w * 0.78, y: h * 0.65, r: Math.max(w, h) * 0.26, vx: -0.045, vy: 0.05, alpha: 0.13 },
      { x: w * 0.55, y: h * 0.15, r: Math.max(w, h) * 0.20, vx: 0.03, vy: -0.04, alpha: 0.10 }
    ];
  }

  function step(){
    ctx.clearRect(0, 0, w, h);

    orbs.forEach(o => {
      o.x += o.vx;
      o.y += o.vy;
      if(o.x - o.r < -o.r * 0.3 || o.x + o.r > w + o.r * 0.3) o.vx *= -1;
      if(o.y - o.r < -o.r * 0.3 || o.y + o.r > h + o.r * 0.3) o.vy *= -1;

      const gradient = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      gradient.addColorStop(0, `rgba(232, 40, 63, ${o.alpha})`);
      gradient.addColorStop(1, 'rgba(232, 40, 63, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 200);
  });

  resize();
  requestAnimationFrame(step);
})();