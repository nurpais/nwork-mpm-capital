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
