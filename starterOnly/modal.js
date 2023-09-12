function editNav() {
  let x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM elements

const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeModalBtn = document.querySelector('.close');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const conditionAccepted = document.querySelector('#checkbox1');
const form = document.querySelector('form');

// Launch Close and Submit event

modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
closeModalBtn.addEventListener('click', closeModal);
form.addEventListener('submit', handleSubmit);

// launch modal form

function launchModal() {
  modalbg.style.display = 'block';
}

// Close modal form

function closeModal() {
  modalbg.style.display = 'none';
}

// Check Form is Valid

function isFormValid() {
  // Check Fist and Last Name have two characters
  const firstNameValue = isValidName(firstName.value);
  const lastNameValue = isValidName(lastName.value);

  function isValidName(name) {
    const trimmedName = name.trim();
    return trimmedName.length === 2;
  }

  // Check Email is Valid

  const emailValue = isValidEmail(email.value);
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailRegex.test(email);
  }

  // Check Birthdate Quantity and Location is not empty

  const birthdateValue = birthdate.value.trim() !== '';
  const quantityValue = quantity.value.trim() !== '';
  const locationsValue = Array.from(locations).some(
    (location) => location.checked
  );

  const conditionValue = conditionAccepted.checked;

  return (
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    birthdateValue &&
    quantityValue &&
    locationsValue &&
    conditionValue
  );
}

function handleSubmit(event) {
  event.preventDefault();

  if (isFormValid()) {
    closeModal();
  }
}
