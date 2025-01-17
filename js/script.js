window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.onclick = () => {
    location.reload();
  };

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  // // Function that handles keydown event
  // function handleKeydown(event) {
  //   const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    //event.preventDefault();
    document.onkeydown = function (e) {
      // Check if the pressed key is in the possibleKeystrokes array
      //event.preventDefault();
      if (possibleKeystrokes.includes(e.key)) {
        e.preventDefault();

        // Update player's directionX and directionY based on the key pressed
        switch (e.key) {
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
    };
    document.onkeyup = function (e) {
      
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        game.player.directionX = 0;
        //event.preventDefault();
      }
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        game.player.directionY = 0;
        //event.preventDefault();
      }
    }
  // }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};
