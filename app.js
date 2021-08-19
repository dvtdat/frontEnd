const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#myForm').style.background = '#ccc';

    document.querySelector('body').classList.add('bg-dark')
});
