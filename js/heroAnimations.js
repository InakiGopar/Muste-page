
const hero = document.querySelector(".hero-section");

let heroActivated = false;

function activateHero() {
    if (!heroActivated) {
        hero.classList.add("active");
        heroActivated = true;
    }
}

window.addEventListener("scroll", () => {
    activateHero();
});



logo.addEventListener("animationend", activateHero);