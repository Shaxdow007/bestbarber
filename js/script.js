const menu = document.querySelector(".menu");
const navBar = document.querySelector("header .nav-bar");

menu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  navBar.classList.remove("active", window.scrollY > 80);
});
// header fixed in scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

// arrow top
const up = document.querySelector(".scroll");
window.addEventListener("scroll", () => {
  this.scrollY >= 100 ? up.classList.add("up") : up.classList.remove("up");
});

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
