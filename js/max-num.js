const maxNumInputs = Array.from(document.querySelectorAll(".js-max-input"));
const maxNumResult = document.querySelector(".js-max-result");

let findMaxNum = (arr) => Math.max(...arr);

maxNumInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    maxNumInputs[index] = Number(input.value);

    if (input.value === "" || isNaN(input.value)) {
      input.style.border = "1px solid red";
      return (maxNumResult.textContent = "заповніть поле числом");
    } else {
      input.style.border = "none";
      maxNumResult.textContent = `заповніть 3 поля зверху`;
    }

    if (!isNaN(findMaxNum(maxNumInputs))) {
      return (maxNumResult.textContent = `Найбільше число, яке ви ввели - ${findMaxNum(maxNumInputs)}`);
    }
  });
});

