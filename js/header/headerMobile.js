const hamburgerMenu = document.querySelector(".hamburger-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtns = document.querySelectorAll(".mobile-menu-btn");

const hamburgerIcon = document.getElementById("hamburger-menu");
const hamburgerIconCross = document.getElementById("hamburger-menu-cross");

window.addEventListener("scroll", () => {

    //If the user scrolls down
    if (window.scrollY > 10) {
        hamburgerMenu.classList.add("scrolled");
    } else {
        hamburgerMenu.classList.remove("scrolled");
        mobileMenu.classList.remove("open");
    }
});

hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    hamburgerIcon.classList.toggle("hidden");
    hamburgerIconCross.classList.toggle("hidden");
});

mobileMenuBtns.forEach( btn => btn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburgerIcon.classList.remove("hidden");
    hamburgerIconCross.classList.add("hidden");
}))

