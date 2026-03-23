const emailInput = document.querySelector(".js-email-input");

import { initModals } from "./modal.js";

emailInput.addEventListener("change", () => {
  emailInput.style.border = "";

  if (!emailInput.value.includes("@")) {
    emailInput.style.border = "1px solid #990000";
    alert("email повинен містити @");
    return;
  }

  initModals();
});
