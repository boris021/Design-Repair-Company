// document.addEventListener("DOMContentLoaded", function (event) {
//   const modal = document.querySelector(".modal");
//   const modalBtn = document.querySelectorAll("[data-toggle=modal]");
//   const closeBtn = document.querySelector(".modal__close");
//   const switchModal = () => {
//     modal.classList.toggle("modal--visible");
//   };

//   modalBtn.forEach((element) => {
//     element.addEventListener("click", switchModal);
//   });

//   closeBtn.addEventListener("click", switchModal);
//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// });

// document.addEventListener("keydown", function (e) {
//   if (e.keyCode === 27) document.getElementById("modalClose").hidden = 1;
// });

$(document).ready(function () {
  var modal = $(".modal"),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
});

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
