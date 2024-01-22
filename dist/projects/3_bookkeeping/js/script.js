/*jshint esversion: 6*/
const btn = document.querySelectorAll('.btn-push'),
      modal = document.querySelector('.form'),
      close = document.querySelector('.overlay');

btn.forEach(function(el) {
    el.addEventListener('click', () => {
        modal.classList.add('active');
        close.classList.add('active');
    });
});

close.addEventListener('click', () => {
    modal.classList.remove('active');
    close.classList.remove('active');
});

//mobile-menu
const openMenu = document.querySelector('.hamburger'),
      mobileMenu = document.querySelector('.header__menu');

openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__menu_active');
    openMenu.classList.toggle('hamburger_active');
});

$(document).ready(function() {
    //Маска ввода телефона
    $('input[name=phone').mask("+7(999) 999-99-99");

    //Валидация форм
    // $('.form__anketa').validate();

    $('form').submit(function(e) {
        e.preventDefault();

        // if (!$(this).valid()) {
        //     return;
        // }

        $.ajax({
            type: "POST",              //говорим, что это отправка
            url: "mailer/smart.php",   //куда отправляем запрос
            data: $(this).serialize()  //данные которые отправляем, подготовиви к отправке с помощью .serialize
        }).done(function() {           //когда операция выполнена, то мы выполним ещё одну функцию
            $(this).find("input").val("");   //внутри ЭТОЙ формы находим инпуты и их содержимое делаем пустым 


            $("form").trigger('reset'); //вконце формы должны очиститься/обновиться
        });
        return false;
    });
});
