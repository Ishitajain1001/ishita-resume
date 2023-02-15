const http = require("http");
const express = require('express');
var firebase = require("firebase/app");
var contactForm = require("firebase/database");

const app = express();
app.use('/static', express.static("public"));

// Home page route
app.get('/', function(req, res) {
  res.send('home page');
});

// About page route
app.get('/about_me', function(req, res) {
  res.send('About me');
});

// Extracirriculars page route
app.get('/extracirriculars', function(req, res) {
  res.send('Extracirriculars');
});

// Recommendations page route
app.get('/send_me_a_recommendation', function(req, res) {
  res.send('recommendations');
});

// Contact page route
app.get('/contact', function(req, res) {
  res.send('contact');
});


app.get('', function(req, res) {
  res.send('contact');
});

app.get('/name', function(req, res) {
  res.send(firstName);
});




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
console.log(firebase);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

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

app.listen(3000, () => console.log('listening at 3000'));
