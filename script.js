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
