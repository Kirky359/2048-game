import Game from "../modules/Game.class.js";

const buttonStart = document.querySelector(".start");

const game = new Game();

buttonStart.addEventListener("click", () => {
  if (buttonStart.classList.contains("start")) {
    game.start();
    game.bindControls();

    buttonStart.classList.remove("start");
    buttonStart.classList.add("restart");
    buttonStart.textContent = "Restart";
  } else {
    game.restart();

    buttonStart.classList.remove("restart");
    buttonStart.classList.add("start");
    buttonStart.textContent = "Start";
  }
});
