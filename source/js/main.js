const button = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__list");
const logo = document.querySelector(".nav__logo-link");
const TABLET_WIDTH = 768;

const setMenuClosed = () => {
  menu.classList.remove("nav__list--nojs");
  menu.classList.add("nav__list--closed");
  logo.style.display = "block";
  button.classList.remove("nav__button--closed");
};

const setMenuOpened = () => {
  menu.classList.remove("nav__list--closed");
  logo.style.display = "none";
  button.classList.add("nav__button--closed");
};

const setNotMobile = () => {
  if (!menu.classList.contains("nav__list--closed")) {
    menu.classList.remove("nav__list--nojs");
    menu.classList.remove("nav__list--closed");
  }
  if (logo.style.display === "none") {
    logo.style.display = "block";
  }
}

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < TABLET_WIDTH) {
    setMenuClosed();
  } else {
    setNotMobile();
  };
});

button.addEventListener("click", () => {
  if (document.documentElement.clientWidth < TABLET_WIDTH) {
    (!menu.classList.contains("nav__list--closed")) ?
      setMenuClosed() :
      setMenuOpened();
  } else {
    setNotMobile();
  };
});

if (document.documentElement.clientWidth < TABLET_WIDTH) {
  setMenuClosed();
} else {
  setNotMobile();
};
