const burger = document.getElementById("menuBurger");
const menu = document.querySelector(".header-menu");
const span = document.querySelector(".burger");
const menuLinks = document.querySelectorAll(".header-menu__link");
const body = document.getElementById("body");

burger.addEventListener("click", () => {
  span.classList.toggle("is-closed");
  menu.classList.toggle("header-menu_active");
  body.classList.toggle("no-scroll");
});

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    span.classList.remove("is-closed");
    menu.classList.remove("header-menu_active");
    body.classList.remove("no-scroll");
  })
);
