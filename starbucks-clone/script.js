const MAX_SLIDES = 4;
let currentSlide = 1;
let intervalId = null;

function initSlider() {
  document.querySelectorAll('input[type="radio"]').forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
      showSlide(Number(radioButton.id.slice(-1)));
      stopSlider();
      startSlider();
    });
  });
  startSlider();
}

function startSlider() {
  intervalId = setInterval(() => {
    currentSlide = (currentSlide % MAX_SLIDES) + 1;
    showSlide(currentSlide);
  }, 5000);
}

function stopSlider() {
  clearInterval(intervalId);
  intervalId = null;
}

function showSlide(slideNumber) {
  currentSlide = slideNumber;
  const radioButton = document.getElementById(`radio${currentSlide}`);
  if (radioButton) {
    radioButton.checked = true;
  }
  const images = document.querySelectorAll(".slides .image");
  images.forEach((image) => image.classList.remove("show"));
  images[currentSlide - 1]?.classList.add("show");
}

function prevSlide() {
  currentSlide = ((currentSlide - 2 + MAX_SLIDES) % MAX_SLIDES) + 1;
  showSlide(currentSlide);
  stopSlider();
  startSlider();
}

function nextSlide() {
  currentSlide = (currentSlide % MAX_SLIDES) + 1;
  showSlide(currentSlide);
  stopSlider();
  startSlider();
}

initSlider();
