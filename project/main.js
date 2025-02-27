// Fonction pour animer les éléments au scroll
function animateOnScroll() {
  gsap.utils.toArray('.ninja-card, .power-card, .server-card, .leak-card').forEach(element => {
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    } else {
      gsap.to(element, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  });
}

// Définir l'état initial des animations
gsap.utils.toArray('.ninja-card, .power-card, .server-card, .leak-card').forEach(element => {
  gsap.set(element, { opacity: 0, y: 50 });
});

// Ajouter les écouteurs d'événements
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    // Validation simple
    if (name && email && message) {
      alert('Merci pour votre message ! Nous vous répondrons bientôt.');
      contactForm.reset();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  });
}

// Gestion des boutons de connexion aux serveurs
const joinButtons = document.querySelectorAll('.join-btn');
joinButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Fonctionnalité à venir ! Les serveurs seront disponibles prochainement.');
  });
});

// Animation des cartes "power-card"
const powerCards = document.querySelectorAll('.power-card');
powerCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.1,
      duration: 0.3,
      boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
    });
  });
});

// Initialiser la première section comme active
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && links.length > 0) {
    sections[0].classList.add('active');
    links[0].classList.add('active');
  }

  // Lancer l'animation au scroll si la fonction existe
  if (typeof animateOnScroll === "function") {
    animateOnScroll();
  }
});
