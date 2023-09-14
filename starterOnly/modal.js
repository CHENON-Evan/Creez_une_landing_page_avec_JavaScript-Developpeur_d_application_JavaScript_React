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
const closeModalBtn = document.querySelector('.close');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const conditionAccepted = document.querySelector('#checkbox1');
const form = document.querySelector('form');
let errorMessage;

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

// Check The Validity Of The Form

function isFormValid() {
  let isValid = true;

  if (!firstName.value || firstName.value.length < 2) {
    displayErrorMessage(
      firstName,
      'Veuillez entrer 2 caractères ou plus pour le champ du prénom.'
    );
    isValid = false;
  } else {
    clearErrorMessage(firstName);
  }

  if (!lastName.value || lastName.value.length < 2) {
    displayErrorMessage(
      lastName,
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    );
    isValid = false;
  } else {
    clearErrorMessage(lastName);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (!email.value || !isValidEmail(email.value)) {
    displayErrorMessage(email, 'Veuillez entrer une adresse mail valide.');
    isValid = false;
  } else {
    clearErrorMessage(email);
  }

  function isValidBirthdate(input) {
    if (input.value.trim() === '') {
      return false;
    }
    return true;
  }

  if (!isValidBirthdate(birthdate)) {
    displayErrorMessage(birthdate, 'Veuillez entrer une date de naissance.');
    isValid = false;
  } else {
    clearErrorMessage(birthdate);
  }

  function isValidQuantity(quantity) {
    const quantityValue = parseInt(quantity.value);
    return !isNaN(quantityValue) && quantityValue > -1 && quantityValue < 100;
  }

  if (!isValidQuantity(quantity)) {
    displayErrorMessage(quantity, 'Veuillez entrer une quantité valide.');
    isValid = false;
  } else {
    clearErrorMessage(quantity);
  }

  const locationsChecked = Array.from(locations).some(
    (location) => location.checked
  );

  if (!locationsChecked) {
    displayErrorMessage(locations[0], 'Vous devez choisir une option.');
    isValid = false;
  } else {
    clearErrorMessage(locations[0]);
  }

  if (!conditionAccepted.checked) {
    displayErrorMessage(
      conditionAccepted,
      'Vous devez accepter les conditions pour soumettre le formulaire.'
    );
    isValid = false;
  } else {
    clearErrorMessage(conditionAccepted);
  }
  return isValid;
}

// Display Error Message

function displayErrorMessage(input, errorMessage) {
  const parent = input.parentElement;
  parent.setAttribute('data-error', errorMessage);
  parent.setAttribute('data-error-visible', 'true');
}

// Clear Error Message

function clearErrorMessage(input) {
  const parent = input.parentElement;
  parent.removeAttribute('data-error');
  parent.removeAttribute('data-error-visible');
}



// Manage The Sending Of The Form

function handleSubmit(event) {
  event.preventDefault();
  if (isFormValid()) {

    closeModal();
  }
}