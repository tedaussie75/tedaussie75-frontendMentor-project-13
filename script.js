const submitBtn = document.querySelector('button[type=submit]');
const inputEmail = document.querySelector('input[type=email]');
const errorEmail = document.querySelector('.error-email');
const errorIcon = document.querySelector('.error-icon');

function submitEmail(e) {
    if(inputEmail.value.length > 0 && inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) == null) {
        inputEmail.parentElement.classList.add('error')
        errorEmail.classList.remove('hide');
        errorIcon.classList.remove('hide');
        e.preventDefault();
    }
}

submitBtn.addEventListener('click', submitEmail)