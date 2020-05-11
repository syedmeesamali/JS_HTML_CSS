const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
email.addEventListener("input", function (event){
  if (email.validity.typeMismatch)
  {
    email.setCustomValidity("Enter proper email address please!!");
  } else {
    email.setCustomValidity("");
  }
})

function showError() {
  if (email.validity.valueMissing)
  {
    emailError.textContent = 'Enter valid email address please!';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Enter valid email address please!';
  } 
}