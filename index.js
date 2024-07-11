const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navElements = document.getElementById("nav-elements");
  const nav = document.querySelector("nav");

  burgerMenu.addEventListener("click", function () {
    navElements.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-50px";
    }
  });
});
