window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    location.reload();
  });



  
  function startGame() {
    console.log("start game");

    game = new Game();

    game.start();
  }

  //function that handles keydown (pressing the key) events
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    //Check if the pressed key belongs to the array of possible keys
    if (possibleKeystrokes.includes(key)) {
      //prevent the default key actions from happening
      //in this case, it's scroll-up/scroll-sown/scroll-left/scroll=right in the browser window
      event.preventDefault();

      //only when we have a game loaded, we can move the player
      if (game) {
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
  }

  //function that handles keyup (release key) events
  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    //Check if the pressed key belongs to the array of possible keys
    if (possibleKeystrokes.includes(key)) {
      //prevent the default key actions from happening
      //in this case, it's scroll-up/scroll-sown/scroll-left/scroll=right in the browser window
      event.preventDefault();

      //only when we have a game loaded, we can move the player
      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0;
            break;

          case "ArrowUp":
            game.player.directionY = 0;
            break;

          case "ArrowRight":
            game.player.directionX = 0;
            break;

          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    }
  }

  //associate the handleKeyDown function with an event listener
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);
};
