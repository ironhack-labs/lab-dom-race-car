window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");


  let game;

  // .addEventListener() calls a function that wait until a JS event
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

  // function that handles keydown events
  function handleKeyDown (event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight", 
      "ArrowDown"
    ]

    // Check if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)){
      // Prevent the default actions from happening
      // in this case, it's the scroll-up,-down,-left,-right in the browser window
      event.preventDefault();

      // Only when we have a game loaded, we can move the player
      if(game){
        switch(key){
          case "ArrowLeft":
          game.player.directionX = -3;
          break;
          
          case "ArrowUp":
          game.player.directionY = -3;
          break;

          case "ArrowRight":
          game.player.directionX = 3;
          break;

          case "ArrowDown":
          game.player.directionY = 3;
          break;

        }
      }

    }
  }



  // function that handles keyup events
  function handleKeyUp (event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight", 
      "ArrowDown"
    ]

    // Check if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)){
      // Prevent the default actions from happening
      // in this case, it's the scroll-up,-down,-left,-right in the browser window
      event.preventDefault();

      // Only when we have a game loaded, we can move the player
      if(game){
        switch(key){
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
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);



};

