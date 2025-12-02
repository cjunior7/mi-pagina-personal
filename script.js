const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Fade-in animation on page load
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

/* ===========================
      🌐 Switch de Idioma
   =========================== */

// Detectar idioma del navegador la primera vez
if (!localStorage.getItem("lang")) {
  const navLang = navigator.language || navigator.userLanguage;
  if (navLang.startsWith("en")) {
    localStorage.setItem("lang", "en");
    if (!window.location.pathname.includes("/en/")) {
      window.location.href = "/mi-pagina-personal/en/index.html";
    }
  } else {
    localStorage.setItem("lang", "es");
  }
}

// Botón de idioma
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langToggle");

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem("lang");

      if (current === "es") {
        localStorage.setItem("lang", "en");
        window.location.href = "/mi-pagina-personal/en/index.html";
      } else {
        localStorage.setItem("lang", "es");
        window.location.href = "/mi-pagina-personal/index.html";
      }
    });
  }
});
