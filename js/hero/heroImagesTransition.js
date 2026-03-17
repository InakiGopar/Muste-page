const images = [
  "../assets/muste-hero-img0.jpg",
  "../assets/muste-hero-img1.jpg",
  "../assets/muste-hero-img2.jpg",
  "../assets/muste-hero-img3.jpg",
  "../assets/muste-hero-img4.jpg",
];

let index = 0;

const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

let showingFirst = true;

setInterval(() => {

  index = (index + 1) % images.length;

  if (showingFirst) {
    bg2.style.backgroundImage = `linear-gradient(#552c2f6e), url(${images[index]})`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `linear-gradient(#552c2f6e), url(${images[index]})`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingFirst = !showingFirst;

}, 5000);