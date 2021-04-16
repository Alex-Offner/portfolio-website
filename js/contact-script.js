(function() {
  let form = document.querySelector('#contact-form');
  let nameInput = document.querySelector('#contact-name');
  let emailInput = document.querySelector('#contact-email');

  function validateName() {
    let value = nameInput.value;

    if(!value) {
      showErrorMessage(nameInput, 'Your name is necessary for me to contact you.');
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }

  function validateEmail() {
    let value = emailInput.value;

    if(!value) {
      showErrorMessage(emailInput, 'Email is necessary for me to contact you.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'Please enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;

    let hasAtSign = value.indexOf('@') > -1;
    let hasDot = value.indexOf('.') > -1;
    return value && hasAtSign && hasDot;
  }

  function validateForm() {
    let isValidName = validateName();
    let isValidEmail = validateEmail();
    return isValidName && isValidEmail;
  }

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thanks for your message! I will answer as soon as I can.');
    }
  });
})();
