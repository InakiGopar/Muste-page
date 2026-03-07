const header = document.getElementById("id-header");
const logo = document.querySelector(".logo-container");

const hamburgerMenu = document.querySelector(".hamburger-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const desktopMenu = document.querySelector(".desktop-menu");


window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        hamburgerMenu.classList.add("scrolled");
        logo.classList.add("scrolled");
        desktopMenu.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        hamburgerMenu.classList.remove("scrolled");
        logo.classList.remove("scrolled");
        desktopMenu.classList.remove("scrolled");
        mobileMenu.classList.remove("open");
    }
});


hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});