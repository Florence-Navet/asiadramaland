let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "80px";
  }

  lastScroll = window.scrollY;
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Sélection de la barre de navigation
//   const nav = document.querySelector("nav");

//   // Gestion de l'événement de défilement de la fenêtre
//   window.addEventListener("scroll", () => {
//     // Ajout d'un log pour vérifier le défilement dans la console
//     console.log(window.scrollY);

//     // Condition pour afficher ou masquer la barre de navigation en fonction du défilement
//     if (window.scrollY > 120) {
//       nav.style.top = "0";
//     } else {
//       nav.style.top = "-50px";
//     }
//   });

// Génération de noms aléatoires pour les champs pseudo et email
const pseudoField = document.getElementById("pseudo");
const emailField = document.getElementById("email");
const randomSuffix = Math.floor(Math.random() * 1000);

pseudoField.name = `pseudo_${randomSuffix}`;
emailField.name = `email_${randomSuffix}`;
