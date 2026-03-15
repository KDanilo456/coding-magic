const calcFirstInput = document.querySelector(".js-first-input");
const calcSecondInput = document.querySelector(".js-second-input");

const calcOperations = document.querySelectorAll(".js-calc-operation");

const calcBtnTotal = document.querySelector(".js-btn-total");

const calcBtnReset = document.querySelector(".js-calc-reset");

const calcResult = document.querySelector(".js-calc-result");

let operation;

const validateInputs = (input) => {
  input.value = input.value.replace(/\s+/g, "");

  if (input.value === "" || isNaN(input.value)) {
    input.style.border = "1px solid #990000";
    return false;
  } else {
    input.style.border = "none";
    return true;
  }
};

calcOperations.forEach((btnOperation) => {
  btnOperation.addEventListener("click", () => {
    const activeOperation = document.querySelector(".calc-active");

    if (activeOperation) {
      activeOperation.classList.remove("calc-active");
    }

    btnOperation.classList.add("calc-active");

    operation = btnOperation.textContent;
  });
});

calcBtnTotal.addEventListener("click", () => {
  calcOperations.forEach(
    (btnOperation) => (btnOperation.style.border = "none"),
  );

  const validateFirstInput = validateInputs(calcFirstInput);
  const validateSecondInput = validateInputs(calcSecondInput);

  if (!validateFirstInput && !validateSecondInput) {
    calcResult.textContent = "заповніть поля числами";
    return;
  } else if (!validateFirstInput || !validateSecondInput) {
    calcResult.textContent = "заповніть поле числом";
    return;
  }

  if (operation === "/" && calcSecondInput.value === "0") {
    calcSecondInput.style.border = "1px solid #990000";
    calcResult.textContent = "на нуль ділити не можна";
    return;
  }

  switch (operation) {
    case "+":
      calcResult.textContent =
        Number(calcFirstInput.value) + Number(calcSecondInput.value);
      break;
    case "-":
      calcResult.textContent =
        Number(calcFirstInput.value) - Number(calcSecondInput.value);
      break;
    case "*":
      calcResult.textContent =
        Number(calcFirstInput.value) * Number(calcSecondInput.value);
      break;
    case "/":
      calcResult.textContent =
        Number(calcFirstInput.value) / Number(calcSecondInput.value);
      break;
    default:
      calcResult.textContent = "виберіть операцію";
      calcOperations.forEach(
        (btnOperation) => (btnOperation.style.border = "1px solid #990000"),
      );
  }
});

calcBtnReset.addEventListener("click", () => {
  calcFirstInput.value = "";
  calcFirstInput.style.border = "none";
  calcSecondInput.value = "";
  calcSecondInput.style.border = "none";
  operation = "";
  calcResult.textContent = "Результат";
  calcOperations.forEach((btnOperation) => {
    btnOperation.style.border = "none";
    btnOperation.classList.remove("calc-active");
  });
});
