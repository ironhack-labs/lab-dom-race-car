window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", ()=>{
   location.reload()

  })

  function startGame() {
    const game = new Game();
    game.start()
    function handleKeydown(event){
      const key = event.key;
      const possibleKeys = [ "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowRight"]
      if(possibleKeys.includes(key)){
        event.preventDefault()
      }
      if(game){
        switch(key){
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            
        }
      }

    }
    function handleKeyup(event){
      const key = event.key;
      const possibleKeys = [ "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowRight"]
      if(possibleKeys.includes(key)){
        event.preventDefault()
      }
      if(game){
        switch(key){
          case "ArrowLeft":
            game.player.directionX = 0;
            break;
          case "ArrowRight":
            game.player.directionX = 0;
            break
          case "ArrowUp":
            game.player.directionY = 0;
            break;
          case "ArrowDown":
            game.player.directionY = 0;
        }
      }
    }
  window.addEventListener("keydown", handleKeydown)
  window.addEventListener("keyup", handleKeyup)

  }
};


