const timeInput = document.querySelector(".js-time-input");
const timeBtn = document.querySelector(".js-time-btn");
const timeResult = document.querySelector(".js-time-result");

let timeInputValue;

timeBtn.addEventListener("click", () => {
  timeInput.value = timeInput.value.replace(/\s+/g, "");
  timeInput.style.border = 'none';

  if (timeInput.value.length === 0 || isNaN(timeInput.value)) {
    timeInput.style.border = '1px solid #990000';
    timeResult.textContent = "введіть число в поле";
    return;
  }

  timeInputValue = Number(timeInput.value);

  let days = 0;
  let hours = Math.floor(timeInputValue / 60);
  let minutes = timeInputValue % 60;
  let countDays;

  if (hours >= 24) {
    countDays = Math.floor(hours / 24);
    hours -= countDays * 24;
    days += countDays;
  }

  if (days >= 1) {
    timeResult.textContent = `${days} дн. ${hours} год ${minutes} хв`;
    return;
  }

  timeResult.textContent = `${hours} год ${minutes} хв`;
});
