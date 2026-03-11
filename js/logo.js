const logo = document.querySelector(".logo-container");

window.addEventListener("scroll", () => {

    //If the user scrolls down
    if (window.scrollY > 10) {
        logo.classList.add("scrolled");
    } else {
        logo.classList.remove("scrolled");
    }
});