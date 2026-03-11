const desktopMenu = document.querySelector(".desktop-menu");

window.addEventListener("scroll", () => {
    //If the user scrolls down
    if (window.scrollY > 10) {
        desktopMenu.classList.add("scrolled");
    } else {
        desktopMenu.classList.remove("scrolled");
    }
});