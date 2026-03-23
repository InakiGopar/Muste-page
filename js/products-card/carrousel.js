import products from "../data/products.js";

//The logic of product data and carrousel

const mainImg = document.getElementById("popup-main-img");
const cards = document.querySelectorAll(".product-section-card");
const nextBtn = document.querySelector(".carousel-btn.right");
const prevBtn = document.querySelector(".carousel-btn.left");
const dotsContainer = document.getElementById("carousel-dots");


let currentIndex = 0;
let currentImages = [];



function renderDots() {
  dotsContainer.innerHTML = "";

  currentImages.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");

    if (index === currentIndex) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentIndex = index;
      updateMainImage();
    });

    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll(".carousel-dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}


function loadProduct(index) {
  const product = products[index];

  document.getElementById("popup-title").textContent = product.title;
  document.getElementById("popup-description").textContent = product.description;

  currentImages = product.images;
  currentIndex = 0;

  updateMainImage();
  renderDots();
};

function updateMainImage() {
  mainImg.src = currentImages[currentIndex];
  updateDots();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateMainImage();
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateMainImage();
}


let startX = 0;
let endX = 0;


function handleSwipe() {
  const diff = startX - endX;

  if (Math.abs(diff) < 50) return; 
  if (diff > 0) {
    nextImage(); // swipe left
  } else {
    prevImage(); // swipe right
  }
}


cards.forEach(card => {
  card.addEventListener("click", () => {

    const index = card.dataset.product;
    loadProduct(index);
    openPopup();
  });
});

mainImg.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

mainImg.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});


nextBtn.addEventListener("click", ()=> {
  const arrow = nextBtn.querySelector("svg");

  arrow.classList.add("move-right");

  setTimeout(() => {
      arrow.classList.remove("move-right");
  }, 150);

  nextImage();
});


prevBtn.addEventListener("click", ()=> {
  const arrow = prevBtn.querySelector("svg");

  arrow.classList.add("move-left");

  setTimeout(() => {
    arrow.classList.remove("move-left");
  }, 150);

  prevImage();
});
