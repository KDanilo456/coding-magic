const emailInput = document.querySelector(".js-email-input");
const btnSubscribe = document.querySelector(".js-btn-subscribe");

import { initModals } from "./modal.js";

btnSubscribe.addEventListener("click", () => {
  emailInput.style.border = "";

  if (!emailInput.value.includes("@")) {
    emailInput.style.border = "1px solid #990000";
    alert("email повинен містити @");
    return;
  }

  initModals(btnSubscribe);
});

