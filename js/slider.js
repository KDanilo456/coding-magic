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