const slides = [
  {
    src: "image1.png",
    text: "Welcome to our premium auto care center."
  },
  {
    src: "image2.png",
    text: "Experience fast, professional service on every visit."
  },
  {
    src: "image3.png",
    text: "Your vehicle is safe with our certified technicians."
  },
  {
    src: "image4.png",
    text: "Quality maintenance that keeps your car running smoothly."
  },
  {
    src: "image5.png",
    text: "Reach out now for dependable repairs and friendly support."
  }
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const sliderCaption = document.getElementById("slider-caption");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  sliderImage.src = slides[currentIndex].src;
  sliderCaption.textContent = slides[currentIndex].text;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

prevButton.addEventListener("click", () => {
  prevSlide();
  resetAutoAdvance();
});

nextButton.addEventListener("click", () => {
  nextSlide();
  resetAutoAdvance();
});

let autoAdvance = setInterval(nextSlide, 9000);

function resetAutoAdvance() {
  clearInterval(autoAdvance);
  autoAdvance = setInterval(nextSlide,9000);
}

showSlide(currentIndex);

