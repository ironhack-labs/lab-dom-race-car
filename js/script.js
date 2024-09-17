//file with user actions

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;


  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener('click', function(){
    location.reload();
  })

  function startGame() {
    console.log("start game");

    game = new Game(); //here it recognizes the class created in the game.js file which defines our specs(?)

    game.start(); //here it recognizes the function created in the game.js file which defines our starting the game
  }

  //Function that handles keydown events (pressing the key)
  function handleKeydown (event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ];

    //Checking if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)){
      //prevent the default key actions from happening, in this case it's scrolling up, down, right and left in the browser window
      event.preventDefault();

      //Only when we have a game loaded, we are able to move the player
      if(game){
        switch(key){
          case "ArrowLeft":
          game.player.directionX = -1; 
          //since left is "origin" if we press it, it moves closer to the origin (-1px)
          break;

          case "ArrowUp":
          game.player.directionY = -1; //since top is "origin" if we press it, it moves closer to the origin (-1px)
          break;

          case "ArrowRight":
          game.player.directionX = 1; //since right is the end of the board if we press it, it moves closer to the outter horizontal limit
          break;

          case "ArrowDown":
          game.player.directionY = 1; //since left is end of the board if we press it, it moves closer to the outter vertical limit
          break;
        }
      }
    }
  }

  //Function that handles keyup events (releasing the key)
  function handleKeyup (event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    //Checking if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)){
      //prevent the default key actions from happening, in this case it's scrolling up, down, right and left in the browser window
      event.preventDefault();

      //Only when we have a game loaded, we are able to move the player
      if(game){
        switch(key){
          case "ArrowLeft":
          game.player.directionX = 0; //since left is "origin" if we press it, it moves closer to the origin (-1px)
          break;

          case "ArrowUp":
          game.player.directionY = 0; //since top is "origin" if we press it, it moves closer to the origin (-1px)
          break;

          case "ArrowRight":
          game.player.directionX = 0; //since right is the end of the board if we press it, it moves closer to the outter horizontal limit
          break;

          case "ArrowDown":
          game.player.directionY = 0; //since left is end of the board if we press it, it moves closer to the outter vertical limit
          break;
        }
      }
    }
  }
    //Associate the handleKeydown function with an Event Listener
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
    
};
