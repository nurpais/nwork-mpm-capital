// FORM HIGHLIGHT
(function () {
  if (document.querySelector(".form")) {
    let formItems = document.querySelectorAll(".form__item");
    formItems.forEach((el) => {
      el.addEventListener("click", function (e) {
        formItems.forEach((el) => {
          el.classList.remove("form__item--active");
        });

        this.closest(".form__item").classList.add("form__item--active");
      });
    });
  }
})();

// ACCORDION
(function () {
  if (document.querySelector(".accordion")) {
    let accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function (el) {
      el.addEventListener("click", function (e) {
        this.classList.toggle("accordion--active");

        let currentBody = this.querySelector(".accordion__body");

        if (this.classList.contains("accordion--active")) {
          let padding = window.innerWidth <= 992 ? 14 : 22;
          currentBody.style.maxHeight = currentBody.scrollHeight + padding + "px";
        } else {
          currentBody.style.maxHeight = null;
        }
      });
    });
  }
})();

// REVIEW SWIPER
(function () {
  if (document.querySelector(".reviews-swiper")) {
    const swiper = new Swiper(".reviews-swiper", {
      // Optional parameters
      loop: true,
      spaceBetween: 30,

      // If we need pagination
      pagination: {
        el: ".reviews-swiper .swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 3,
        },
      },
    });
  }
})();
