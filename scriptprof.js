

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Show the slides
function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);
