$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png"></button>'
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });

    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });

    // Modal

    $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn();
    });
    
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      });
    });

    // Validate

    function valideForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста введите своё имя",
          phone: "Пожалуйста введите свой номер телефона",
          email: {
            required: "Пожалуйста введите свой email",
            email: "Неправлиьно введен email"
          }
        }
      });
    }

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    //Mask

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //Mail

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();

        $('form').trigger('reset');
      });
      return false;
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    // Плавная прокрутка

    $(function(){
      $("a[href^='#']").click(function(){
              var _href = $(this).attr("href");
              $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
              return false;
      });
    });
  });

  