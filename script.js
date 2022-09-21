const hamburger = document.querySelector(".hamburger");
const navHolder = document.querySelector(".nav-holder");
const navLink = document.querySelectorAll(".nav-holder > li > a");

hamburger.addEventListener("click", mobileMenu);

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navHolder.classList.toggle("active");
}
