//slideshow
var currentSlide = 1;
var slides = document.getElementsByClassName("slideshow");
displaySlides(currentSlide);
console.log("Hello");

function moveSlide(change){
  currentSlide += change;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  if (currentSlide < 1) {
    currentSlide = slides.length;
  }
  displaySlides(currentSlide);
}

function displaySlides(index){
  for (let slideIndex = 0; slideIndex < slides.length; slideIndex++) {
    slides[slideIndex].style.display = "none";
  }
  slides[currentSlide-1].style.display = "block";
}
