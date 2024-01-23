/*jshint esversion: 6*/
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



//кнопки вверху
const btns = document.querySelectorAll('button');

function deleteActiveClass() {
    btns.forEach(item => {
        item.classList.remove('btn_active');
    });
}
// deleteActiveClass();


btns.forEach(item => {
    item.addEventListener('click', () => {
        deleteActiveClass();
        item.classList.add('btn_active');
    });
});
