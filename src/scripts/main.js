
import Game from '../modules/Game.class.js';

export const buttonStart = document.querySelector('.start');

const game = new Game();

buttonStart.addEventListener('click', () => {
  if (buttonStart.classList.contains('start')) {
    game.start();
    game.bindControls();
  } else {
    game.restart();
    buttonStart.classList.remove('restart');
    buttonStart.classList.add('start');
    buttonStart.textContent = 'Start';
  }
});
