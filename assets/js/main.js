(function(){
  const btn = document.getElementById('menuBtn');
  const header = document.querySelector('header.site-header');
  if (btn){
    btn.addEventListener('click', () => {
      const open = header.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
