const games = [
  {
    id: 1,
    name: "Високосний калькулятор",
    category: "numerical",
  },
  {
    id: 2,
    name: "Вгадай число",
    category: "numerical",
  },
  {
    id: 3,
    name: "Камінь-Ножиці-Папір",
    category: "game",
  },
  {
    id: 4,
    name: "Калькулятор",
    category: "numerical",
  },
  {
    id: 5,
    name: "Калькулятор часу",
    category: "numerical",
  },
  {
    id: 6,
    name: "Google динозаврик",
    category: "game",
  },
  {
    id: 7,
    name: "Футбол",
    category: "game",
  },
  {
    id: 8,
    name: "Найбільше число",
    category: "numerical",
  },
  {
    id: 9,
    name: "Наша команда",
    category: "acquaintance",
  },
  {
    id: 10,
    name: "Вчений",
    category: "acquaintance",
  },
];

let openDropdowns = document.querySelectorAll("#openMenu");
let dropdowns = document.querySelectorAll("#dropdown");
let sections = document.querySelectorAll("section");

const openDropdown = (index) => {
  dropdowns[index].classList.toggle("nav__dropdown--active");
};

openDropdowns.forEach((btn, index) => {
  btn.addEventListener("click", () => openDropdown(index));
});

let btnOpenBurgerMenu = document.querySelector(".js-open-burger");
let btnCloseBurgerMenu = document.querySelector(".js-close-burger");
let burgerMenu = document.querySelector(".js-burger-menu");

const wrapper = document.querySelector(".wrapper");
// const toggleBurgerMenu = (index) => {
//   burgerMenus[index].classList.toggle("burger__active");
// };

btnOpenBurgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-active");
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  wrapper.style.backgroundColor = "transparent";
  document.body.style.overflowY = 'hidden';
});

btnCloseBurgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-active");
  document.body.style.backgroundColor = "transparent";
  wrapper.style.backgroundColor = "white";
  document.body.style.overflowY = 'scroll';
});







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

calcOperations.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("is-active");

    if (btn.classList.contains("is-active")) {
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
    }

    return (operation = btn.textContent);
  });
});

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

let timeInput = document.querySelector("#time-input");
let timeBtn = document.querySelector("#time-btn");
let timeResult = document.querySelector("#time-result");
let timeInputValue;

timeBtn.addEventListener("click", () => {
  if (timeInput.value.length === 0) {
    return (timeResult.textContent = "введіть число в поле");
  }

  if (isNaN(timeInput.value)) {
    return (timeResult.textContent = "введіть число в поле");
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
    return (timeResult.textContent = `${days} дн. ${hours} год ${minutes} хв`);
  }

  timeResult.textContent = `${hours} год ${minutes} хв`;
});

let footbalArea = document.querySelector("#football-area");
let ball = document.querySelector("#ball");

footbalArea.addEventListener("click", (event) => {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  let styles = ball.getBoundingClientRect();

  let x = styles.left;
  let y = styles.top;

  let ballX = mouseX - x;
  let ballY = mouseY - y;

  ball.style.left = `${ballX + x}px`;
  ball.style.top = `${ballY + y}px`;
});

let maxNumInputs = Array.from(document.querySelectorAll(".max-number__input"));
let maxNumResult = document.querySelector(".max-number__result");

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

    if (maxNumInputs.includes(NaN)) {
      return (maxNumResult.textContent = "заповніть поле числом");
    }

    if (!isNaN(findMaxNum(maxNumInputs))) {
      return (maxNumResult.textContent = `Найбільше число, яке ви ввели - ${findMaxNum(maxNumInputs)}`);
    }
  });
});

let items = document.querySelectorAll(".js-team-item");
let indicators = document.querySelectorAll(".js-indicator");
let btnLeft = document.querySelector(".js-btn-left");
let btnRight = document.querySelector(".js-btn-right");

let acc = 0;
let arr = [];

let maxIndex;
let minIndex;

items.forEach((item, idx) => {
  if (idx > 0) {
    item.classList.add("team__hidden");
  }

  arr.push(idx);

  maxIndex = Math.max(...arr);
  minIndex = Math.min(...arr);
});

indicators.forEach((item, idx) => {
  if (idx === 0) {
    item.classList.add("team__active");
  }
});

function getRightClick() {
  acc++;

  indicators.forEach((item, idx) => {
    item.classList.remove("team__active");

    if (idx === acc) {
      item.classList.toggle("team__active");
    }
  });

  items.forEach((item, idx) => {
    item.classList.add("team__hidden");

    btnLeft.addEventListener("click", getLeftClick);

    if (idx === acc) {
      item.classList.toggle("team__hidden");

      if (idx === maxIndex) {
        btnRight.removeEventListener("click", getRightClick);
      }
    }

    if (idx === minIndex) {
      btnLeft.addEventListener("click", getLeftClick);
    }
  });
}

function getLeftClick() {
  acc--;

  indicators.forEach((item, idx) => {
    item.classList.remove("team__active");

    if (idx === acc) {
      item.classList.toggle("team__active");
    }
  });

  items.forEach((item, idx) => {
    item.classList.add("team__hidden");

    if (idx === acc) {
      item.classList.toggle("team__hidden");

      if (idx === minIndex) {
        btnLeft.removeEventListener("click", getLeftClick);
      }
    }

    if (idx === maxIndex) {
      btnRight.addEventListener("click", getRightClick);
    }
  });
}

btnRight.addEventListener("click", getRightClick);

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

let arrScientists = Array.from(document.querySelectorAll(".js-scientist"));
let arrBtns = document.querySelectorAll(".js-scientists-btn");
let list = document.querySelector(".js-scientists");

const addText = (scientist, idx) => {
  scientist.textContent = `${scientists[idx].name} ${scientists[idx].surname}`;
};

arrScientists.forEach((scientist, idx) => {
  addText(scientist, idx);
});

const checkFilter = (arr) => {
  arrScientists.forEach((scientist) => {
    arr.forEach((item) => {
      if (scientist.textContent.includes(item.name)) {
        scientist.classList.add("scientists__active");
      }
    });
  });
};

arrBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    arrScientists.forEach((scientist, idx) => {
      addText(scientist, idx);

      scientist.classList.remove("scientists__active");

      scientist.classList.remove("scientists__hidden");

      list.append(scientist);

      if (btn.dataset.action === "show-19-century") {
        let filter = scientists.filter(
          (item) => item.born >= 1800 && item.born <= 1899,
        );

        checkFilter(filter);
      }

      if (btn.dataset.action === "find-birth-year") {
        let scientistAlbert = scientists.find((item) => item.name === "Albert");

        if (scientist.textContent.includes(scientistAlbert.name)) {
          scientist.classList.add("scientists__active");
          scientist.textContent += ` ${scientistAlbert.born}`;
        }
      }

      if (btn.dataset.action === "find-surname-letter") {
        let filter = scientists.filter((item) => item.surname.startsWith("C"));

        checkFilter(filter);
      }

      if (btn.dataset.action === "delete-name-letter") {
        let filter = scientists.filter((item) => item.name.startsWith("A"));

        arrScientists.forEach((scientist) => {
          filter.forEach((item) => {
            if (scientist.textContent.includes(item.name)) {
              scientist.classList.add("scientists__hidden");
            }
          });
        });
      }

      if (btn.dataset.action === "find-extreme-lifespans") {
        let arrYears = scientists.reduce((arr, item) => {
          arr.push(item.dead - item.born);
          return arr;
        }, []);

        let maxYears = Math.max(...arrYears);
        let minYears = Math.min(...arrYears);

        let filter = scientists.filter(
          (item) =>
            item.dead - item.born === maxYears ||
            item.dead - item.born === minYears,
        );

        checkFilter(filter);
      }

      if (btn.dataset.action === "find-latest-born") {
        let arrBirthYears = scientists.reduce((arr, item) => {
          arr.push(item.born);
          return arr;
        }, []);

        let maxBirthYear = Math.max(...arrBirthYears);

        let filter = scientists.filter((item) => item.born === maxBirthYear);

        checkFilter(filter);
      }

      if (btn.dataset.action === "find-name-surname-letter") {
        let arrScientistsLetters = scientists.reduce((arr, item) => {
          arr.push(item.name[0]);
          return arr;
        }, []);

        arrScientistsLetters.forEach((letter) => {
          let filter = scientists.filter(
            (item) =>
              item.name.startsWith(letter) && item.surname.startsWith(letter),
          );

          checkFilter(filter);
        });
      }
      if (btn.dataset.action === "sort-alphabet") {
        arrScientists
          .sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach((item) => {
            list.append(item);
          });
      }
      if (btn.dataset.action === "sort-lived-years") {
        scientist.dataset.years = scientists[idx].dead - scientists[idx].born;

        arrScientists
          .sort((a, b) => Number(a.dataset.years) - Number(b.dataset.years))
          .forEach((item) => {
            list.append(item);
          });
      }
    });
  });
});

let modals = document.querySelectorAll(".modal-wrapped");
let modalCloseBtns = document.querySelectorAll(".modal__close");
let openModalBtns = document.querySelectorAll("#open-modal");

let inputEmail = document.querySelector(".footer__input");
let inputName = document.querySelector(".modal__input");
let submitBtn = document.querySelector(".modal__btn");
let user = document.querySelector("#username");

const toggleModal = (modal) => {
  modal.classList.toggle("modal-wrapped--active");
};

modals.forEach((modal) => {
  if ((modal.dataset.modal = "main")) {
    document.body.style.overflowY = "hidden";
  }
});

modalCloseBtns.forEach((closeBtn, i) => {
  closeBtn.addEventListener("click", () => {
    toggleModal(modals[i]);
    document.body.style.overflowY = "scroll";
  });
});

submitBtn.addEventListener("click", () => {
  if (inputName.value.length > 0) {
    modals.forEach((modal) => {
      modal.classList.remove("modal-wrapped--active");
      document.body.style.overflowY = "scroll";
    });

    user.textContent = inputName.value;
  }
});

openModalBtns.forEach((openBtn, i) => {
  openBtn.addEventListener("click", () => {
    if (openBtn.dataset.action === "subscribe") {
      if (inputEmail.value.includes("@")) {
        toggleModal(modals[i]);
        document.body.style.overflowY = "hidden";
      } else {
        inputEmail.style.border = "1px solid #990000";
        inputEmail.placeholder = "заповніть поле";
      }
    }

    if (openBtn.dataset.action === "regist") {
      if (user.textContent === "User!") {
        toggleModal(modals[i]);
        document.body.style.overflowY = "hidden";
      }
    }
  });
});

inputEmail.addEventListener("input", () => {
  if (!inputEmail.value.includes("@")) {
    inputEmail.style.border = "1px solid #990000";
  } else {
    inputEmail.style.border = "none";
  }
  if (inputEmail.value.length === 0) {
    inputEmail.style.border = "none";
  }
});

let dinoBg = document.querySelector(".dino-game-wrapped");
let dinoBody = document.querySelector(".dino-game__body");
let dino = document.querySelector(".dino-game__svg");
let cactus = document.querySelector(".dino-game__cactus");
let dinoBtn = document.querySelector(".dino-game__btn");
let dinoGameScore = document.querySelector(".dino-game__score");
let accD = 0;

const jumpDino = () => {
  dino.classList.add("dino-game__active");

  setTimeout(() => {
    dino.classList.remove("dino-game__active");
  }, 500);
};

dinoBtn.addEventListener("click", (event) => {
  dinoBtn.style.display = "none";
  dino.style.bottom = "0px";

  dinoGameScore.textContent = "0";

  let cactusStyles = getComputedStyle(cactus);
  let dinoStyles = getComputedStyle(dino);
  let dinoBodyStyles = getComputedStyle(dinoBody);

  cactus.classList.add("dino-game__cactus-active");

  let id = setInterval(() => {
    accD += 50;
    dinoBody.style.backgroundPositionX = `-${accD}px`;

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
