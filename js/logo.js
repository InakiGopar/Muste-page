const logo = document.querySelector(".logo-container");
const logoImage = document.getElementById("muste-icon-img")

window.addEventListener("scroll", () => {

    //If the user scrolls down
    if (window.scrollY > 10) {
        logo.classList.add("scrolled");
        logoImage.src = "assets/logo-muste-white.png";
    } else {
        logo.classList.remove("scrolled");
        logoImage.src = "assets/logo-muste.png";
    }
});