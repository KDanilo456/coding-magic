// const dinoBody = document.querySelector(".js-dino-body");
// const dino = document.querySelector(".js-dino");
// const cactus = document.querySelector(".js-cactus");
// const dinoBtn = document.querySelector(".js-dino-btn");
// const dinoGameScore = document.querySelector(".js-dino-score");

// const jumpDino = () => {
//   dino.classList.add("dino-game__active");

//   setTimeout(() => {
//     dino.classList.remove("dino-game__active");
//   }, 500);
// };

// dinoBtn.addEventListener("click", () => {
//   dinoBtn.style.display = "none";
//   dino.style.bottom = "0px";

//   dinoGameScore.textContent = "0";

//   let cactusStyles = getComputedStyle(cactus);
//   let dinoStyles = getComputedStyle(dino);
//   let dinoBodyStyles = getComputedStyle(dinoBody);

//   cactus.classList.add("dino-game__cactus-active");

//   let id = setInterval(() => {

//     Number(dinoGameScore.textContent++);

//     if (
//       parseInt(cactusStyles.right) >= parseInt(dinoStyles.right) - 30 &&
//       parseInt(cactusStyles.right) <= parseInt(dinoStyles.right) &&
//       parseInt(dinoStyles.bottom) <= 60
//     ) {
//       clearInterval(id);
//       dinoBody.style.backgroundPositionX = dinoBodyStyles.backgroundPositionX;
//       cactus.style.right = cactusStyles.right;
//       cactus.classList.remove("dino-game__cactus-active");
//       dino.style.bottom = dinoStyles.bottom;
//       dino.classList.remove("dino-game__active");
//       dinoBody.removeEventListener("click", jumpDino);
//       dinoBtn.style.display = "block";
//       dinoBtn.textContent = "почати знову";
//     }
//   }, 100);

//   dinoBody.addEventListener("click", jumpDino);
// });



// const dinoBody = document.querySelector(".js-dino-body");
// const dino = document.querySelector(".js-dino");
// const cactus = document.querySelector(".js-cactus");
// const dinoBtn = document.querySelector(".js-dino-btn");
// const dinoGameScore = document.querySelector(".js-dino-score");

// let backgroundPosition = 0;
// let cactusesSrc = ["img/cactus1.png", "img/cactus2.png", "img/cactus3.png"];

// dinoBtn.addEventListener("click", () => {
//   cactus.src = cactusesSrc[Math.floor(Math.random() * cactusesSrc.length)];

//   cactus.classList.add("dino-cactus-active");

//   let cactusStyles = getComputedStyle(cactus);
//   let bodyStyles = getComputedStyle(dinoBody);

//   const id = setInterval(() => {
//     backgroundPosition += 50;
//     dinoBody.style.backgroundPositionX = `-${backgroundPosition}px`;

//     console.log(parseInt(cactusStyles.right),bodyStyles.width);
    
//     if (parseFloat(cactusStyles.right) > parseFloat(bodyStyles.width)) {
//       // cactus.classList.remove("dino-cactus-active");
//       // cactus.src = cactusesSrc[Math.floor(Math.random() * cactusesSrc.length)];
//       // cactus.classList.add("dino-cactus-active");
//     }
//   }, 100);
// });
