document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");
  if (form && message) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("prenom") || data.get("nom") || "vous";
      message.textContent = `Merci d'avoir contacter Flocon énergie. Votre demande a été préparée, nous serons a vous d'ici peu!`;
      form.reset();
    });
  }

  // Small reveal animation without dependencies.
  const revealItems = document.querySelectorAll(".solution-card, .product-card, .sensor-card, .team-grid article, .value-grid article, .process-grid > div");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    revealItems.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity .55s ease, transform .55s ease";
      observer.observe(el);
    });
  }
});

