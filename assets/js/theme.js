(function(){
  const root = document.documentElement;
  const key = "theme";
  const preferred = localStorage.getItem(key);
  if (preferred) root.setAttribute("data-theme", preferred);

  function toggle(){
    const next = root.getAttribute("data-theme")==="dark" ? "" : "dark";
    if (next){ root.setAttribute("data-theme","dark"); localStorage.setItem(key,"dark"); }
    else { root.removeAttribute("data-theme"); localStorage.removeItem(key); }
  }
  const btns = document.querySelectorAll('[data-toggle-theme]');
  btns.forEach(b => b.addEventListener('click', toggle));
})();