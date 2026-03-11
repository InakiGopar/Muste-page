
const header = document.getElementById("id-header");

window.addEventListener("scroll", () => {
    //If the user scrolls down
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


