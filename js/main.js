document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const closeBtn = document.querySelector(".modal__close");
  const switchModal = () => {
    modal.classList.toggle("modal--visible");
  };

  modalBtn.forEach((element) => {
    element.addEventListener("click", switchModal);
  });

  closeBtn.addEventListener("click", switchModal);
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("modal--visible");
    }
  };
  //скрытие ESC
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) modal.classList.remove("modal--visible");
  });

  //слайдер 1
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 20 + bullets.width() + 20);
  bullets.css("left", prev.width() + 20);

  //слайдер 2
  var mySwiper = new Swiper(".swiper2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },

    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

  var next = $(".swiper-button-next2");
  var prev = $("swiper-button-prev2");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 20 + bullets.width() + 40);
  bullets.css("left", prev.width() + 50);

  new WOW().init();
});

//прокрутка
$(document).ready(function () {
  $("a[href*=#]").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        777
      );
    e.preventDefault();
    return false;
  });
});

//кнпока вверх
var top_show = 150;
var delay = 1000;
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > top_show) $("#top").fadeIn();
    else $("#top").fadeOut();
  });
  $("#top").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      delay
    );
  });
});

//анимация
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animate__animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

//валидация
$("#form").validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    CheckboxFooter: {
      required: true,
    },
    userPhone: {
      required: true,
      minlength: 17,
      maxlength: 17,
    },
    // правило объект
    userEmail: {
      required: true,
      email: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиньше 11 букв",
    },
    userPhone: {
      required: "Телефон обязательно",
      minlength: "Минимум 11 цифр",
      maxlength: "Максимум 11 цифр",
    },
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com",
    },
  },
  $('#form').submit(function() { 
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

//валидация
$(".modal__form").validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userPhone: {
      required: true,
      minlength: 17,
      maxlength: 17,
    },
    // правило объект
    userEmail: {
      required: true,
      email: true,
    },
    policyCheckbox5: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиньше 11 букв",
    },
    userPhone: {
      required: "Телефон обязательно",
      minlength: "Минимум 11 цифр",
      maxlength: "Максимум 11 цифр",
    },
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com",
    },
  },
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert("Форма отправлена");
        $(form)[0].reset();
        modal.remove("modal--visible");
      },
    });
  },
});


//валидация
$(".control__form").validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userPhone: {
      required: true,
      minlength: 17,
      maxlength: 17,
    },
    // правило объект
    userEmail: {
      required: true,
      email: true,
    },
    checkboxControl: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиньше 15 букв",
    },
    userPhone: {
      required: "Телефон обязательно",
      minlength: "Минимум 11 цифр",
      maxlength: "Максимум 11 цифр",
    },
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com",
    },
  },
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert("Форма отправлена");
        $(form)[0].reset();
        modal.remove("modal--visible");
      },
    });
  },
});

// маска для телефона
$("[type=tel]").mask("+7(000) 00-00-000", {
  placeholder: "Ваш номер телефона:",
});

// $(document).ready(function () {
//   var modal = $(".modal"),
//     modalBtn = $('[data-toggle="modal"]'),
//     closeBtn = $(".modal__close");

//   modalBtn.on("click", function () {
//     modal.toggleClass("modal--visible");
//   });
//   closeBtn.on("click", function () {
//     modal.toggleClass("modal--visible");
//   });

//   $(document).keydown(function (e) {
//     if (e.keyCode === 27) modal.removeClass("modal--visible");
//   });
// });

//yandex карты
ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [55.751574, 37.573856],
        zoom: 9,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./img/map.png",
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [55.661574, 37.573856],
      {
        hintContent: "Собственный значок метки с контентом",
        balloonContent: "А эта — новогодняя",
        iconContent: "12",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "images/ball.png",
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      }
    );

  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});
