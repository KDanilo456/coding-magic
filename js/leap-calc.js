let leapCalcBtn = document.querySelector(".js-leap-btn");
let leapCalcInput = document.querySelector(".js-leap-input");
let leapCalcResult = document.querySelector(".js-leap-result");

leapCalcBtn.addEventListener("click", () => {
  if (isNaN(leapCalcInput.value) || leapCalcInput.value.length === 0) {
    leapCalcResult.style.color = "black";
    return (leapCalcResult.textContent = "введіть число");
  }

  if (Number(leapCalcInput.value) % 4 !== 0) {
    leapCalcResult.textContent = "Ви народилися не у високосний рік!";
    leapCalcResult.style.color = "#990000";
  } else {
    leapCalcResult.textContent = "Ви народилися у високосний рік!";
    leapCalcResult.style.color = "#039900";
  }
});
