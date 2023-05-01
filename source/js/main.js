const button = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__list");
const logo = document.querySelector(".nav__logo-link");
const windowWidth = document.documentElement.clientWidth;
const TABLET_WIDTH = 768;

const setMenuClosed = () => {
  menu.classList.add("nav__list--closed");
  logo.style.display = "block";
  button.classList.remove("nav__button--closed");
};

const setMenuOpened = () => {
  menu.classList.remove("nav__list--closed");
  logo.style.display = "none";
  button.classList.add("nav__button--closed");
};

window.addEventListener("resize", () => {
  (windowWidth < TABLET_WIDTH) ?
    setMenuClosed() :
    setMenuOpened();
});

button.addEventListener("click", () => {
  if (windowWidth < TABLET_WIDTH) {
    (!menu.classList.contains("nav__list--closed")) ?
      setMenuClosed() :
      setMenuOpened();
  };
});
