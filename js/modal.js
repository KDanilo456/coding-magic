export const openModal = (data) => {
  const modal = document.querySelector(`div[data-modal='${data}']`);

  if (modal) {
    modal.classList.add("modal-active");
  }
};

export const closeModal = (data) => {
  const modal = document.querySelector(`div[data-modal='${data}']`);

  if (modal) {
    modal.classList.remove("modal-active");
  }
};

export const initModals = (btn) => {
  const modalsClose = document.querySelectorAll(".js-modal-close");

  if (btn) {
    openModal(btn.dataset.action);
  }

  modalsClose.forEach((item) => {
    item.addEventListener("click", () => {
      closeModal(item.dataset.action);
    });
  });
};
