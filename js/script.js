window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame(); //When clicking on the start button, we want to invoke startGame()
  });

  restartButton.addEventListener("click", () => {
    location.reload();
  });

  function startGame() {
    game = new Game(); //we're instantiating (creating) a new game using the blueprint(constructor/class) called Game
    game.start(); // Here we're invoking the start() method coming from the blueprint (no need to write "this" because we're not inside the class Game)
  }
};

function handleKeydown(event) {
  const key = event.key;
  switch (key) {
    case "ArrowLeft":
      game.player.directionX = -1;
      event.preventDefault();
      break;
    case "ArrowUp":
      game.player.directionY = -1;
      event.preventDefault();
      break;
    case "ArrowRight":
      game.player.directionX = 1;
      event.preventDefault();
      break;
    case "ArrowDown":
      game.player.directionY = 1;
      event.preventDefault();
      break;
  }
}
document.addEventListener("keydown", handleKeydown);
