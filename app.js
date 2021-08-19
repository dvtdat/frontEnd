const formInput = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('.msg');

formInput.addEventListener('submit', onSubmit);

function onSubmit(e){
    
    console.log(nameInput.value);
}