/* Menú móvil */
(function(){
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  if(!btn || !menu) return;

  function close(){
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menú');
  }

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
})();

/* Marca en el menú la sección que se está viendo */
(function(){
  const links = document.querySelectorAll('.navlinks a');
  const sections = [...links]
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if(!('IntersectionObserver' in window) || !sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* Formulario de contacto (Formspree) */
(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const status = document.getElementById('formStatus');
  const btn = form.querySelector('.form-submit');
  const originalText = btn.textContent;
  const MY_EMAIL = 'js.corona.05@gmail.com';

  function setStatus(text, type){
    status.textContent = text;
    status.className = 'form-status' + (type ? ' ' + type : '');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    // Si aún no configuras Formspree, abre el correo del visitante con el mensaje listo
    if(form.action.includes('TU_ID')){
      const subject = encodeURIComponent(data.get('subject'));
      const body = encodeURIComponent(
        data.get('message') + '\n\n— ' + data.get('name') + ' (' + data.get('email') + ')'
      );
      window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('Se abrió tu aplicación de correo con el mensaje listo para enviar.', 'ok');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Enviando...';
    setStatus('');

    try{
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if(!res.ok) throw new Error('Respuesta ' + res.status);
      form.reset();
      setStatus('Mensaje enviado. Te respondo pronto a tu correo.', 'ok');
    }catch(err){
      setStatus('No se pudo enviar el mensaje. Revisa tu conexión o escríbeme a ' + MY_EMAIL + '.', 'error');
    }finally{
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
})();

/* Año del footer */
(function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();

/* Fondo animado del inicio */
(function(){
  const canvas = document.getElementById('particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let w, h, orbs;
  let running = false;
  let visible = true;

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
    draw();
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    orbs.forEach(o => {
      const gradient = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      gradient.addColorStop(0, `rgba(232, 40, 63, ${o.alpha})`);
      gradient.addColorStop(1, 'rgba(232, 40, 63, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function step(){
    if(!visible || reduceMotion.matches){ running = false; return; }
    orbs.forEach(o => {
      o.x += o.vx;
      o.y += o.vy;
      if(o.x - o.r < -o.r * 0.3 || o.x + o.r > w + o.r * 0.3) o.vx *= -1;
      if(o.y - o.r < -o.r * 0.3 || o.y + o.r > h + o.r * 0.3) o.vy *= -1;
    });
    draw();
    requestAnimationFrame(step);
  }

  function start(){
    if(running || !visible || reduceMotion.matches) return;
    running = true;
    requestAnimationFrame(step);
  }

  // Pausa la animación cuando el inicio no está en pantalla (ahorra batería)
  if('IntersectionObserver' in window){
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    }).observe(hero);
  }
  reduceMotion.addEventListener?.('change', start);

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 200);
  });

  resize();
  start();
})();