/**
 * Función que mueve el carrusel a la izquierda o derecha.
 * @param {number} amount - La cantidad de píxeles a desplazar.
 */
function scrollCarousel(amount) {
  const carouselTrack = document.getElementById('carouselTrack');
  if (carouselTrack) {
    carouselTrack.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  }
}

/**
 * Lógica para animaciones de revelación y efectos de scroll.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Selector de elementos a revelar
  const reveals = document.querySelectorAll('.reveal');
  const navbar = document.getElementById('navbar');

  // 2. Configuración del Intersection Observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Opcional: Dejar de observar una vez revelado
        // revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 // Se activa cuando el 15% del elemento es visible
  });

  // 3. Observar cada sección
  reveals.forEach(reveal => revealObserver.observe(reveal));

  // 4. Efecto de Navbar al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 5. Parallax suave en el Hero (solo en desktop)
  const heroContent = document.querySelector('.hero-content');
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      if (heroContent && scrollValue < 600) {
        heroContent.style.transform = `translateY(${scrollValue * 0.2}px)`;
        heroContent.style.opacity = 1 - (scrollValue / 600);
      }
    });
  }

  // 6. Menú móvil (Hamburger Menu)
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
});
