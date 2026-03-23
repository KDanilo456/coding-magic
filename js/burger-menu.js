const burgerMenus = document.querySelectorAll(".js-burger-menu");
const openMenuBtns = document.querySelectorAll(".js-open-burger");
const closeMenuBtns = document.querySelectorAll(".js-close-burger");
const mainPage = document.querySelector(".js-main-page");

const toggleMenu = (idx) => {
  burgerMenus[idx].classList.toggle("burger-active");
};

openMenuBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    toggleMenu(idx);

    mainPage.style.filter = "blur(2px)";
    document.body.style.overflow = 'hidden';
  });
});

closeMenuBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    toggleMenu(idx)
    mainPage.style.filter = "none";
    document.body.style.overflow = '';
  });
});
