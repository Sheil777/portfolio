document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('header nav');
    const body = document.querySelector('body');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_close');
        nav.classList.toggle('mobile-open');
        body.classList.toggle('lock');
    });
});