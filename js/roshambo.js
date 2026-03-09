const roshamboBtns = document.querySelectorAll(".js-roshambo-btn");
const roshamboResult = document.querySelector(".js-roshambo-result");
const roshamboComputerResult = document.querySelector(".js-roshambo-result-btn");
const roshamboCalcComputer = document.querySelector(".js-roshambo-computer");
const roshamboCalcUser = document.querySelector(".js-roshambo-user");
const roshamboBtnReset = document.querySelector(".js-roshambo-reset");

let computerResult;

roshamboBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    computerResult = roshamboBtns[Math.floor(Math.random() * roshamboBtns.length)];

    if (
      (computerResult.dataset.action === "stone" &&
        btn.dataset.action === "paper") ||
      (computerResult.dataset.action === "scissors" &&
        btn.dataset.action === "stone") ||
      (computerResult.dataset.action === "paper" &&
        btn.dataset.action === "scissors")
    ) {
      roshamboResult.textContent = "Ви виграли раунд!";
      roshamboResult.style.color = "#039900";
      roshamboCalcUser.textContent = Number(roshamboCalcUser.textContent) + 1;
    } else if (btn.dataset.action === computerResult.dataset.action) {
      roshamboResult.textContent = "Нічия";
      roshamboResult.style.color = "black";
    } else {
      roshamboResult.textContent = "Ви програли раунд!";
      roshamboResult.style.color = "#990000";
      roshamboCalcComputer.textContent =
        Number(roshamboCalcComputer.textContent) + 1;
    }
  });
});

roshamboComputerResult.addEventListener("click", () => {
  if (computerResult === undefined) {
    return (roshamboResult.textContent = `Спершу нажміть на одну з кнопок зверху`);
  }

  if (computerResult.dataset.action === "stone") {
    roshamboResult.textContent = ` Варіант комп'ютера: камінь`;
  } else if (computerResult.dataset.action === "scissors") {
    roshamboResult.textContent = ` Варіант комп'ютера: ножиці`;
  } else if (computerResult.dataset.action === "paper") {
    roshamboResult.textContent = ` Варіант комп'ютера: папір`;
  } else {
    roshamboResult.textContent = `Спершу нажміть на одну з кнопок зверху`;
  }
});

roshamboBtnReset.addEventListener("click", () => {
  if (
    roshamboCalcUser.textContent === "0" &&
    roshamboCalcComputer.textContent === "0"
  ) {
    return (roshamboResult.textContent = `спершу зіграйте в гру`);
  }
  roshamboResult.style.color = "black";
  roshamboResult.textContent = "Клацніть на кнопку зверху";
  roshamboCalcUser.textContent = 0;
  roshamboCalcComputer.textContent = 0;
  computerResult = undefined;
});