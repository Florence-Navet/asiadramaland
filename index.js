let lastScroll = 0;
let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "80px";
  }

  lastScroll = window.scrollY;
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "120px";
  }
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // console.log(scrollValue);
  // if (scrollValue > 45) {
  //   imgImprovise.style.opacity = 1;
  //   imgImprovise.style.transform = "none";
  // }

  //popup

  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
    // playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
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

//image
document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector("#VideoImprovise");
  const video = videoContainer.querySelector("video");

  const handleScroll = () => {
    const videoRect = videoContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (videoRect.top < windowHeight && videoRect.bottom >= 0) {
      // La vidéo est dans la fenêtre de visualisation
      video.style.opacity = 1;
      video.style.transform = "translateX(0)";
    } else {
      // La vidéo est hors de la fenêtre de visualisation
      video.style.opacity = 0;
      video.style.transform = "translateX(-100%)";
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Vérifie au chargement de la page
});
