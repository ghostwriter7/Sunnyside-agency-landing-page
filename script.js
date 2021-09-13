const menuToggler = document.querySelector("nav button");
const menuEl = document.querySelector("nav ul");

menuToggler.addEventListener("click", () => {
  menuEl.classList.toggle("menu__active");
});
