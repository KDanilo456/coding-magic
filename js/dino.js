const dinoBody = document.querySelector(".js-dino-body");
const dino = document.querySelector(".js-dino");
const cactus = document.querySelector(".js-cactus");
const dinoBtn = document.querySelector(".js-dino-btn");
const dinoGameScore = document.querySelector(".js-dino-score");

let backgroundPosition = 0;

const jumpDino = () => {
  dino.classList.add("dino-game__active");

  setTimeout(() => {
    dino.classList.remove("dino-game__active");
  }, 500);
};

dinoBtn.addEventListener("click", () => {
  dinoBtn.style.display = "none";
  dino.style.bottom = "0px";

  dinoGameScore.textContent = "0";

  let cactusStyles = getComputedStyle(cactus);
  let dinoStyles = getComputedStyle(dino);
  let dinoBodyStyles = getComputedStyle(dinoBody);

  cactus.classList.add("dino-game__cactus-active");

  let id = setInterval(() => {
    backgroundPosition += 50;
    dinoBody.style.backgroundPositionX = `-${backgroundPosition}px`;

    Number(dinoGameScore.textContent++);

    if (
      parseInt(cactusStyles.right) >= parseInt(dinoStyles.right) - 30 &&
      parseInt(cactusStyles.right) <= parseInt(dinoStyles.right) &&
      parseInt(dinoStyles.bottom) <= 60
    ) {
      clearInterval(id);
      dinoBody.style.backgroundPositionX = dinoBodyStyles.backgroundPositionX;
      cactus.style.right = cactusStyles.right;
      cactus.classList.remove("dino-game__cactus-active");
      dino.style.bottom = dinoStyles.bottom;
      dino.classList.remove("dino-game__active");
      dinoBody.removeEventListener("click", jumpDino);
      dinoBtn.style.display = "block";
      dinoBtn.textContent = "почати знову";
    }
  }, 100);

  dinoBody.addEventListener("click", jumpDino);
});