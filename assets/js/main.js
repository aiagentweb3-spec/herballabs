(() => {
  // Mobile menu toggle
  const btn = document.querySelector("[data-menu-btn]");
  const drawer = document.querySelector("[data-mobile-drawer]");
  if (btn && drawer) {
    let open = false;
    const set = (v) => {
      open = v;
      drawer.style.display = open ? "block" : "none";
    };
    set(false);
    btn.addEventListener("click", () => set(!open));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) set(false);
    });
  }

  // Active nav highlight
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("a[data-nav], .menu a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (!href) return;
    if (href === path || (path === "" && href.includes("index.html"))) {
      a.classList.add("active");
    }
  });

  // Reveal animations
  const els = document.querySelectorAll(".card, .tile, .media, .note, .head");
  els.forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();
