// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAOvY7JEg_BlD_vY8G8U0pte8RDAVMF64Y",
    authDomain: "contactform-4b458.firebaseapp.com",
    databaseURL: "https://contactform-4b458.firebaseio.com",
    projectId: "contactform-4b458",
    storageBucket: "contactform-4b458.appspot.com",
    messagingSenderId: "30881318695",
    appId: "1:30881318695:web:5fdb64e2b72e3cbb690b02",
    measurementId: "G-7L3K2PLM0M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  console.log(firebase);

  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');

//slideshow

// var currentSlide = 1;
// var slides = document.getElementsByClassName("slideshow");
// displaySlides(currentSlide);
// console.log("Hello");
//
// function moveSlide(change){
//   currentSlide += change;
//   if (currentSlide > slides.length) {
//     currentSlide = 1;
//   }
//   if (currentSlide < 1) {
//     currentSlide = slides.length;
//   }
//   displaySlides(currentSlide);
// }
//
// function displaySlides(index){
//   for (let slideIndex = 0; slideIndex < slides.length; slideIndex++) {
//     slides[slideIndex].style.display = "none";
//   }
//   slides[currentSlide-1].style.display = "block";
// }
//
// //display current page style on menu
// const HOME = document.querySelector(".home");
// const EXTRA = document.querySelector(".extra");
// const CONTACT = document.querySelector(".contact");
// const REC = document.querySelector(".rec");
// const ABOUT = document.querySelector(".about");
//
// function currentPage(){
//   HOME.classList.toggle(".home");
//   EXTRA.classList.toggle(".extra");
//   CONTACT.classList.toggle(".contact");
//   REC.classList.toggle(".rec");
//   ABOUT.classList.toggle(".about");
// }
//
// HOME.onclick = currentPage;
// EXTRA. onclick = currentPage;
// CONTACT. onclick = currentPage;
// REC. onclick = currentPage;
// ABOUT. onclick = currentPage;

// //listener for submitting Form
document.getElementById('contactForm').addEventListener('submit', submitContactForm);

//Submit form
function submitContactForm(e){
  e.preventDefault();

  var firstName = getInputVal('first-name');
  var lastName = getInputVal('last-name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  saveMessage(firstName, lastName, email, message);

}

//function for form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(firstName, lastName, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message
  });
}
