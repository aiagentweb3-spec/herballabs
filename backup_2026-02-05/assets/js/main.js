(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  if(btn && drawer){
    btn.addEventListener('click', () => {
      const isOpen = drawer.getAttribute('data-open') === 'true';
      drawer.setAttribute('data-open', String(!isOpen));
      drawer.style.display = isOpen ? 'none' : 'block';
    });
    drawer.style.display = 'none';
  }

  // active link based on pathname
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path) a.classList.add('active');
  });
})();
