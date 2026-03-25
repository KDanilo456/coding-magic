let footbalArea = document.querySelector(".js-football-area");
let ball = document.querySelector(".js-football-ball");

footbalArea.addEventListener("click", (event) => {
  let mouseX = event.offsetX;
  let mouseY = event.offsetY;

  ball.style.left = `${mouseX}px`;
  ball.style.top = `${mouseY}px`;
});
