window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    // Llame a la función restartGame cuando se haga clic en el botón
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  // La función que recarga la página para iniciar un nuevo juego
  function restartGame() {
    location.reload();
  }

  // Función que maneja el possibleKeystrokes
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Compruebe si la tecla presionada está en el array de possibleKeystrokes
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Actualiza la directionX y directionY del jugador según la tecla presionada
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  // Agrega la funcion handleKeydown como detector de even listener para el keydown
  window.addEventListener("keydown", handleKeydown);
};
