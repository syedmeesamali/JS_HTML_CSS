const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');


function showError() {
  if (email.validity.valueMissing)
  {
    emailError.textContent = 'Enter valid email address please!';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Enter valid email address please!';
  } 
}