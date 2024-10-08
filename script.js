window.addEventListener("load", (event) => {
  const hamburger = document.querySelector(".hamburger");
  const navHolder = document.querySelector(".nav-holder");
  const navLink = document.querySelectorAll(".nav-holder > li > a");
  const body =  document.querySelector(".body-container");
  let height = document.querySelector("nav").offsetHeight;

  hamburger.addEventListener("click", mobileMenu);

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navHolder.classList.remove("active");
  }

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navHolder.classList.toggle("active");
    if (navHolder.getAttribute("class").includes("active")) {
      navHolder.style.top = `${height}px`;
      body.style.display = "none";
    } else {
      navHolder.style.top = `-100%`;
      body.style.display = "block";
    }
  }
});
