//Submit form
function submitContactForm(e){
  e.preventDefault();
  //function for form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  var firstName = getInputVal('first-name');
  var lastName = getInputVal('last-name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // saveMessage(firstName, lastName, email, message);
  // call backend (posting to an http address)
}

// //listener for submitting Form
console.log(document);
document.getElementById("submitBtn").addEventListener("click", submitContactForm);
