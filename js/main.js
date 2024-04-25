let menu = document.querySelector(".header__hamburger");
let header = document.querySelector(".header");
let navBar = document.querySelector(".header__list");
let Close = document.querySelector(".header__item--close");
let backTop = document.querySelector(".back-top");

window.addEventListener("scroll", function () {
  showBackTop();
  showHeaderShrink();
});

menu.addEventListener("click", function () {
  navBar.classList.toggle("header__show__list");
});
Close.addEventListener("click", function () {
  navBar.classList.remove("header__show__list");
});

function showBackTop() {
  if (scrollY > 100) {
    backTop.classList.add("show__back-top");
  } else {
    backTop.classList.remove("show__back-top");
  }
}
function showHeaderShrink() {
  if (scrollY > 0) {
    header.classList.add("show__header__shrink");
  } else {
    header.classList.remove("show__header__shrink");
  }
}

const registerBtn = document.querySelector(".register__btn");
const formBottom = document.querySelector(".form__card__bottom");
const loginBtns = document.querySelector(".login__btn");
const formCardTop = document.querySelector(".form__card__top");

registerBtn.addEventListener("click", () => {
  formBottom.style.display = "block";
  registerBtn.style.color = "blue";
  loginBtns.style.color = "black";
  formCardTop.style.display = "none";
});

loginBtns.addEventListener("click", () => {
  formCardTop.style.display = "block";
  formBottom.style.display = "none";
  loginBtns.style.color = "blue";
  registerBtn.style.color = "black";
});
