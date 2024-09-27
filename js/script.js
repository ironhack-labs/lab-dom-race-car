window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game.start();
    console.log("start game");
  }

  window.addEventListener("keydown", (event) => {
    console.log(event.key);
    event.preventDefault(); //default behavior scrolls ups and down and we want to prevent that bc we dont want to uses the key arrows to scroll we want to use it to play
    switch (event.key) {
      case "ArrowLeft":
        game.player.direcitionX = -1;
        break;
      case "ArrowUp":
        game.player.directionY = -1;
        break;
      case "ArrowRight":
        game.player.direcitionX = 1;
        break;
      case "ArrowDown":
        game.player.directionY = 1;


    }

  });
};
