let calcInputs = document.querySelectorAll(".js-calc-input");
let calcOperations = document.querySelectorAll(".js-calc-btn");
let calcResult = document.querySelector(".js-calc-result");
let calcTotal = document.querySelector(".js-calc-total");

let firstInputValue;
let secondInputValue;
let operation;

calcInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.dataset.action === "first-value") {
      firstInputValue = Number(input.value);
    }
    if (input.dataset.action === "second-value") {
      secondInputValue = Number(input.value);
    }
  });
});

// calcOperations.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.classList.add("calc-active");

//     // if (btn.classList.contains("is-active")) {
//     //   btn.classList.add("is-active");
//     // } else {
//     //   btn.classList.remove("is-active");
//     // }

//     return (operation = btn.textContent);
//   });
// });

document.addEventListener('click', event => {
    
    const btnOperation = event.target.closest('.js-calc-btn');

    if (!btnOperation) return;

    const activeOperation = document.querySelector()
    
})

calcTotal.addEventListener("click", () => {
  calcInputs.forEach((input) => {
    if (input.dataset.action === "first-value" && input.value === "") {
      firstInputValue = undefined;
    }

    if (input.dataset.action === "second-value" && input.value === "") {
      secondInputValue = undefined;
    }

    if (input.value === "" || isNaN(input.value)) {
      input.style.border = "1px solid red";
    } else {
      input.style.border = "none";
    }
  });

  if (operation === "+") {
    calcResult.textContent = firstInputValue + secondInputValue;
  } else if (operation === "-") {
    calcResult.textContent = firstInputValue - secondInputValue;
  } else if (operation === "*") {
    calcResult.textContent = firstInputValue * secondInputValue;
  } else if (operation === "/") {
    calcResult.textContent = firstInputValue / secondInputValue;
  } else {
    calcResult.textContent = "виберіть операцію";
  }

  if (operation === undefined) {
    calcOperations.forEach((btn) => (btn.style.border = "1px solid red"));
  } else {
    calcOperations.forEach((btn) => (btn.style.border = "none"));
  }

  if (calcResult.textContent.includes("NaN")) {
    return (calcResult.textContent = "введіть число");
  }
});
