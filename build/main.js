document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.style.opacity = 0.9;
    } else {
      navbar.style.opacity = 1;
    }
  });
});
