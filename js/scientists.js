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

const arrScientists = Array.from(document.querySelectorAll(".js-scientist"));
const arrBtns = document.querySelectorAll(".js-scientists-btn");
const list = document.querySelector(".js-scientists");

const addText = () => {
  arrScientists.forEach((scientist, idx) => {
    scientist.textContent = `${scientists[idx].name} ${scientists[idx].surname}`;
  });
};

addText();

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
    addText();
    arrScientists.forEach((scientist, idx) => {
      scientist.classList.remove("scientists__active");
      scientist.classList.remove("scientists__hidden");

      list.append(scientist);

      let filter;

      switch (btn.dataset.action) {
        case "show-19-century":
          filter = scientists.filter(
            (item) => item.born >= 1800 && item.born <= 1899,
          );

          checkFilter(filter);
          break;
        case "find-birth-year":
          let scientistAlbert = scientists.find(
            (item) => item.name === "Albert",
          );

          if (scientist.textContent.includes(scientistAlbert.name)) {
            scientist.classList.add("scientists__active");
            scientist.textContent += ` ${scientistAlbert.born}`;
          }
          break;
        case "find-surname-letter":
          filter = scientists.filter((item) => item.surname.startsWith("C"));

          checkFilter(filter);
          break;
        case "delete-name-letter":
          filter = scientists.filter((item) => item.name.startsWith("A"));

          arrScientists.forEach((scientist) => {
            filter.forEach((item) => {
              if (scientist.textContent.includes(item.name)) {
                scientist.classList.add("scientists__hidden");
              }
            });
          });
          break;
        case "find-extreme-lifespans":
          let arrYears = scientists.reduce((arr, item) => {
            arr.push(item.dead - item.born);
            return arr;
          }, []);

          let maxYears = Math.max(...arrYears);
          let minYears = Math.min(...arrYears);

          filter = scientists.filter(
            (item) =>
              item.dead - item.born === maxYears ||
              item.dead - item.born === minYears,
          );

          checkFilter(filter);
          break;
        case "find-latest-born":
          let arrBirthYears = scientists.reduce((arr, item) => {
            arr.push(item.born);
            return arr;
          }, []);

          let maxBirthYear = Math.max(...arrBirthYears);

          filter = scientists.filter((item) => item.born === maxBirthYear);

          checkFilter(filter);
          break;
        case "find-name-surname-letter":
          let arrScientistsLetters = scientists.reduce((arr, item) => {
            arr.push(item.name[0]);
            return arr;
          }, []);

          arrScientistsLetters.forEach((letter) => {
            filter = scientists.filter(
              (item) =>
                item.name.startsWith(letter) && item.surname.startsWith(letter),
            );

            checkFilter(filter);
          });
          break;
        case "sort-alphabet":
          [...arrScientists]
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((item) => {
              list.append(item);
            });
          break;
        case "sort-lived-years":
          scientist.dataset.years = scientists[idx].dead - scientists[idx].born;

          [...arrScientists]
            .sort((a, b) => Number(a.dataset.years) - Number(b.dataset.years))
            .forEach((item) => {
              list.append(item);
            });
          break;
        default:
          return;
      }
    });
  });
});
