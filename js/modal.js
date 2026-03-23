export const toggleModal = (data) => {
  const modal = document.querySelector(`div[data-modal='${data}']`);

  if (modal) {
    modal.classList.toggle("modal-active");
  }
};

export const initModals = () => {
  const modalsClose = document.querySelectorAll(".js-modal-close");
  const modalsOpen = document.querySelectorAll(".js-open-modal");

  modalsOpen.forEach((item) => {
    item.addEventListener("click", () => {
      toggleModal(item.dataset.action);
    });
  });

  modalsClose.forEach((item) => {
    item.addEventListener("click", () => {
      toggleModal(item.dataset.action);
    });
  });
};
