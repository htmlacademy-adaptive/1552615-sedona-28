const closeBtn = document.querySelector(".modal__button");
const successBtn = document.querySelector(".modal__button--success");
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".form__button");
const modal = document.querySelector(".modal");
const successModal = document.querySelector(".modal--success");
const failModal = document.querySelector(".modal--failed");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");

const openModal = () => {
  if (firstNameInput.value && lastNameInput.value && phoneInput.value && emailInput.value) {
    successModal.classList.add("modal--active");
  } else {
    failModal.classList.add("modal--active");
  }
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  openModal();
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal--active");
});

successBtn.addEventListener("click", () => {
  successModal.classList.remove("modal--active");
});
