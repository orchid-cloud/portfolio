import './scss/style.scss';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm(e.target);
  if (isFormValid(e.target)) {
    e.target.submit();
  }
});

Array.from(form.elements).forEach((input) => {
  input.addEventListener('input', removeErrorBorder);
  input.addEventListener('blur', (e) => validateInput(e.target));
});

const setError = (element) => {
  const inputControl = element.parentElement;
  inputControl.classList.add('outline-invalid');
  element.nextElementSibling.style.display = 'inline-block';
  element.setAttribute('data-invalid', '');
};

function removeErrorBorder(e) {
  e.target.parentElement.classList.remove('outline-invalid');
  e.target.nextElementSibling.style.display = 'none';
  e.target.removeAttribute('data-invalid');
}

function isFormValid(form) {
  return !form.querySelector('[data-invalid]') === true;
}

const validateForm = (form) => {
  Array.from(form.elements).forEach((input) => {
    validateInput(input);
  });
};

const validateInput = (input) => {
  if (input.type !== 'submit' && input.value === '') setError(input);
};
