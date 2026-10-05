// =========================
// 1. SCROLL ANIMATIONS NATIVAS (Intersection Observer)
// =========================
// Configuramos cómo y cuándo se activará la animación
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15 // El elemento debe ser al menos 15% visible en pantalla para animarse
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si el elemento entra en la pantalla
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // Añadimos la clase que hace la transición
      observer.unobserve(entry.target); // Dejamos de observarlo para que solo se anime una vez
    }
  });
}, observerOptions);

// Buscamos todos los elementos con la clase "reveal" y los ponemos a observar
document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});

// =========================
// 2. INTRO CLEANUP SYNCHRONIZATION
// =========================
// Ocultamos completamente el div de intro después de 5.5s para no bloquear clics
setTimeout(() => {
  const intro = document.getElementById("intro");
  if (intro) {
    intro.style.display = "none";
  }
}, 5500);

// =========================
// 3. NAVBAR SCROLL INTERACTION
// =========================
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }
}, { passive: true });

// =========================
// 4. RESPONSIVE NAVIGATION MENU
// =========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Cerrar menú automáticamente al dar click en un enlace
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// =========================
// 5. DAILY BIBLE VERSE API
// =========================
const versiculoContainer = document.getElementById("versiculoTexto");

if (versiculoContainer) {
  fetch("https://beta.ourmanna.com/api/v1/get/?format=json")
    .then(response => {
      if (!response.ok) throw new Error("Error en respuesta de red");
      return response.json();
    })
    .then(data => {
      const verse = data.verse.details.text;
      const ref = data.verse.details.reference;

      versiculoContainer.innerHTML = `
        <p class="verse-quote">"${verse}"</p>
        <cite class="verse-author">— ${ref}</cite>
      `;
    })
    .catch(error => {
      console.error("API Error:", error);
      versiculoContainer.innerHTML = `
        <p style="font-style: normal; color: #ef4444; font-size: 1rem;">
          ⚠️ No se pudo cargar el versículo en este momento, pero te esperamos en nuestras reuniones.
        </p>
      `;
    });
}