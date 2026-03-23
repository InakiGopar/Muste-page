
//The logic of the pop up appear and disappear

const cards = document.querySelectorAll(".product-section-card");
const overlay = document.getElementById("product-popup-overlay");
const popup = document.querySelector(".popup-content");
const closeBtn = document.querySelector(".popup-close-btn");




function openPopup() {
    overlay.classList.remove("hidden");
    document.body.classList.add("no-scroll");
}


function closePopup() {
  overlay.classList.add("hidden");
  document.body.classList.remove("no-scroll"); 
}


cards.forEach(card => {
  card.addEventListener("click", () => {
    openPopup();
  });
});

closeBtn.addEventListener("click", closePopup);


overlay.addEventListener("click", (e) => {
    if (!popup.contains(e.target)) {
        closePopup();
    }
});





