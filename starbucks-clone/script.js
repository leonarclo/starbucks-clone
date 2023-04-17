const MAX_SLIDES = 4;
let currentSlide = 1;
let intervalId = null;
let isSlideRunning = false;

/**
 * Initializes the slider by adding event listeners to radio buttons and starting the slider.
 */
function initSlider() {
  document.querySelectorAll('input[type="radio"]').forEach((radioButton) => {
    radioButton.addEventListener("click", handleRadioButtonClick);
  });

  startSlider();
}

/**
 * Starts the slider if it's not already running.
 */
function startSlider() {
  if (!isSlideRunning) {
    intervalId = setInterval(nextSlide, 5000);
    isSlideRunning = true;
  }
}

/**
 * Stops the slider and sets `isSlideRunning` to false.
 */
function stopSlider() {
  clearInterval(intervalId);
  intervalId = null;
  isSlideRunning = false;
}

/**
 * Handles radio button click events by updating the current slide and showing it.
 * @param {Event} event The radio button click event.
 */
function handleRadioButtonClick(event) {
  event.stopPropagation();
  const slideNumber = Number(event.target.id.slice(-1));
  showSlide(slideNumber);
}

/**
 * Shows the specified slide by updating the current slide and selecting the corresponding radio button and image.
 * @param {number} slideNumber The slide number to show.
 */
function showSlide(slideNumber) {
  currentSlide = slideNumber;
  updateRadioButton();
  updateImage();
}

/**
 * Advances to the next slide by updating the current slide and showing it.
 */
function nextSlide() {
  currentSlide = (currentSlide % MAX_SLIDES) + 1;
  showSlide(currentSlide);
}

/**
 * Updates the radio button to select the current slide.
 */
function updateRadioButton() {
  const radioButton = document.getElementById(`radio${currentSlide}`);
  if (radioButton) {
    radioButton.checked = true;
  }
}

/**
 * Updates the image to show the current slide.
 */
function updateImage() {
  const images = document.querySelectorAll(".slides .image");
  images.forEach((image) => {
    image.classList.remove("show");
  });
  images[currentSlide - 1].classList.add("show");
}

initSlider();
