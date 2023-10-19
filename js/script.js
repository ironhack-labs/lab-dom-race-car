window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game ();
    game.start();
  }

  // Function that handles keys events
  function handleKeydown(event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft", 
      "ArrowRight",
      "ArrowUp", 
      "ArrowDown"
    ];

    if(possibleKeystrokes.includes(key)){
      event.preventDefault();
      if(game){
        switch (key){
          case "ArrowLeft": 
            game.player.directionX = -5 // this means its going to change the position of the car/element by 1px;
            break;
          case "ArrowUp": 
            game.player.directionY = -5
            break;
          case "ArrowRight": 
            game.player.directionX = 5
            break;
          case "ArrowDown": 
            game.player.directionY = 5
            break;
        }
      }
    }
  }
  
  window.addEventListener("keydown", handleKeydown);

  function handleKeyup(event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft", 
      "ArrowRight",
      "ArrowUp", 
      "ArrowDown"
    ];
  
    if(possibleKeystrokes.includes(key)){
      event.preventDefault();
      if(game){
        switch (key){
          case "ArrowLeft": 
            game.player.directionX = 0 // this means its going to change the position of the car/element by 1px;
            break;
          case "ArrowUp": 
            game.player.directionY = 0
            break;
          case "ArrowRight": 
            game.player.directionX = 0
            break;
          case "ArrowDown": 
            game.player.directionY = 0
            break;
        }
      }
    }
  }
  window.addEventListener("keyup", handleKeyup);

  restartButton.addEventListener("click", function(){
    resetGame();
    startGame();
  });
};
