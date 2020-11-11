//slideshow
var currentSlide = 1;
var slides = document.getElementsByClassName("slideshow");
displaySlides(currentSlide);

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

//display current page style on menu
const HOME = document.querySelector(".home");
const EXTRA = document.querySelector(".extra");
const CONTACT = document.querySelector(".contact");
const REC = document.querySelector(".rec");
const ABOUT = document.querySelector(".about");

function currentPage(){
  HOME.classList.toggle(".home");
  EXTRA.classList.toggle(".extra");
  CONTACT.classList.toggle(".contact");
  REC.classList.toggle(".rec");
  ABOUT.classList.toggle(".about");
}

HOME.onclick = currentPage;
EXTRA. onclick = currentPage;
CONTACT. onclick = currentPage;
REC. onclick = currentPage;
ABOUT. onclick = currentPage;



</script>
