const guessNumBtn = document.querySelector(".js-guess-btn");
const guessNumInput = document.querySelector(".js-guess-input");
const guessNumResult = document.querySelector(".js-guess-result");

guessNumBtn.addEventListener("click", () => {
  const currentNumber = Math.floor(Math.random() * 10);

  if (isNaN(guessNumInput.value) || guessNumInput.value.length === 0) {
    guessNumResult.style.color = "black";
    return (guessNumResult.textContent = "введіть число");
  }

  if (Number(guessNumInput.value) < 0 || Number(guessNumInput.value > 10)) {
    guessNumResult.style.color = "black";
    return (guessNumResult.textContent = "введіть число від 0 до 10");
  }

  if (Number(guessNumInput.value) !== currentNumber) {
    guessNumResult.textContent = `Ви програли, комп’ютер загадав (${currentNumber})`;
    guessNumResult.style.color = "#990000";
  } else {
    guessNumResult.textContent = `Вітаю, ви вгадали число! (${currentNumber})`;
    guessNumResult.style.color = "#039900";
  }
});
