(function () {
  const nav = document.getElementById("mainNav");

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function updateNavbarOnScroll() {
    if (!nav) return;
    const scrolled = window.scrollY > 10;
    nav.classList.toggle("navbar-scrolled", scrolled);
  }

  function enableSmoothAnchors() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Close mobile navbar after click
      const navCollapse = document.getElementById("navCollapse");
      if (navCollapse && navCollapse.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        collapse.hide();
      }
    });
  }

  setYear();
  updateNavbarOnScroll();
  window.addEventListener("scroll", updateNavbarOnScroll, { passive: true });
  enableSmoothAnchors();
})();
