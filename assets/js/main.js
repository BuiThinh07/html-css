const logIn = document.querySelector('.header-item-choose--login');
const register = document.querySelector('.header-item-choose--register');
const form = document.querySelector('.modal');
const formLogIn = document.querySelector('.form.form-2');
const formRegister = document.querySelector('.form.form-1');
const modalBody = document.querySelector('.modal__body');
const iconClose = document.querySelector('.main-form__close');

logIn.onclick = function() {
    form.classList.add('displayFlex');
    formLogIn.classList.add('displayBlock');
    formRegister.classList.remove('displayBlock');
}

iconClose.onclick = function() {
    form.classList.remove('displayFlex');
}

register.onclick = function() {
    form.classList.add('displayFlex');
    formLogIn.classList.remove('displayBlock');
    formRegister.classList.add('displayBlock');
}

form.addEventListener('click', function() {
    form.classList.remove('displayFlex');
})

modalBody.addEventListener('click',function(e) {
    e.stopPropagation();
})