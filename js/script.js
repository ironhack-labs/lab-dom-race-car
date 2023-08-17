window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game = new Game();
  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start();
  }

  window.addEventListener("keydown", (event) => {
    console.log(event.key);

    /*
function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      
      */

    //

    event.preventDefault(); // default (scroll down/up) prevent
    switch (
      event.key //event.key is set value (key=keyboard)
    ) {
      case "ArrowLeft": // if you put "enter", it shows enter
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
  });

    // Add an event listener to the restart button
    restartButton.addEventListener("click", function () {
      restartGame();
    });
    function restartGame() {
      location.reload();
    }
  };

// why window.onload :
// wait for the brower open
// => we make sure that everything load on the screen and then we apply javascript
// if window item is not there, and JVS is running, at times it gives "undefined".
