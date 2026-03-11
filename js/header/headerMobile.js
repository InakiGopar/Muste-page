const hamburgerMenu = document.querySelector(".hamburger-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

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
    
});