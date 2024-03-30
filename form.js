const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const messageError = document.querySelector('#message-error');

// Validate form
form.addEventListener('submit'), (e) => {
    e.preventDefault();

    // Validate name
    if (nameInput.value.length < 3) {
        nameError.textContent
    }
 }