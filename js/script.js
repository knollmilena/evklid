let tabsBtn = document.querySelectorAll(".tabs-nav__btn");
let tabsItem = document.querySelectorAll(".tabs-item");
tabsBtn.forEach(function (elem) {
  elem.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    tabsItem.forEach(function (elem) {
      elem.classList.remove("tabs-item--active");
    });
    document.querySelector(`[data-target="${path}"]`).classList.add("tabs-item--active");
  });
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
});

// BURGER
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = document.querySelectorAll(".nav__item");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  document.body.classList.toggle("stop-scroll");
});
menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

// SEARCH
let searchBtnUp = document.querySelector(".search__link");
let searhForm = document.querySelector(".form__search-hidden");
let btnCloseSearch = document.querySelector(".form__btn-close");

console.log(btnCloseSearch);
searchBtnUp.addEventListener("click", function () {
  searhForm.classList.add("form__search");
});
btnCloseSearch.addEventListener("click", function () {
  searhForm.classList.remove("form__search");
});

searhForm.addEventListener("submit", function () {
  searhForm.classList.remove("form__search");
});
