let game;

document.getElementById('start-button').addEventListener('click', () => {
  game = new Game();
  game.start();
});

document.getElementById('restart-button').addEventListener('click', () => {
  location.reload();
});

// Keyboard input
document.addEventListener('keydown', (event) => {
  if (!game || !game.player) return;
  if (event.key === 'ArrowLeft') game.player.directionX = -1;
  if (event.key === 'ArrowRight') game.player.directionX = 1;
  if (event.key === 'ArrowUp') game.player.directionY = -1;
  if (event.key === 'ArrowDown') game.player.directionY = 1;
});

document.addEventListener('keyup', (event) => {
  if (!game || !game.player) return;
  if (['ArrowLeft', 'ArrowRight'].includes(event.key)) game.player.directionX = 0;
  if (['ArrowUp', 'ArrowDown'].includes(event.key)) game.player.directionY = 0;
});
