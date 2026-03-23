import { initModals } from "./modal.js";

initModals();

const usernameInput = document.querySelector(".js-username-input");
const usernameSaveBtn = document.querySelector(".js-btn-save");
const username = document.querySelector(".js-username");
const modal = document.querySelector("div[data-modal='greeting'");

usernameSaveBtn.addEventListener("click", () => {
  if (usernameInput.value.length === 0) {
    usernameInput.style.border = "1px solid #990000";
    return;
  }

  modal.classList.remove("modal-active");

  username.textContent = usernameInput.value;
});

const openDropdowns = document.querySelectorAll(".js-open-dropdown");
const dropdowns = document.querySelectorAll(".js-dropdown");

openDropdowns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    dropdowns[idx].classList.toggle("nav__dropdown--active");
  });
});
