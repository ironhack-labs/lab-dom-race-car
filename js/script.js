window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  let game;

  restartButton.addEventListener('click', function(){
    location.reload()
  })
 

  function startGame() {
    console.log("start game");
    game = new Game()
    game.start()
  }
    //Function that handles keydown events
    function handleKeydown(event){
      const key = event.key;
      const possibleKeystrokes = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
     
      // Check if the pressed key belongs to the array of possible keys 
      if(possibleKeystrokes.includes(key)){
        //prevent the default key actions from happening
        // in this case, it's scroll-up/scroll-down/scroll-left/scroll-right
        //in the browser window
      
      event.preventDefault()

      //Only when we have a game loaded, we can move the player

      //Function for keydown events

      if(game){
        switch(key) {
          case "ArrowLeft":
           game.player.directionX = -1;
           break;

          case "ArrowUp":
            game.player.directionY = -1;
            break;
          
          case "ArrowRight":
            game.player.directionX = 1;

          case "ArrowDown":
            game.player.directionY = 1;
            break
           

        }
      }

    }  
     
  }

  //Function that handles keyup(releasing the key events)

  function handleKeyup(event){
    const key = event.key;
    const possibleKeystrokes = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
   
    // Check if the pressed key belongs to the array of possible keys 
    if(possibleKeystrokes.includes(key)){
      //prevent the default key actions from happening
      // in this case, it's scroll-up/scroll-down/scroll-left/scroll-right
      //in the browser window
    
    event.preventDefault()

    //Only when we have a game loaded, we can move the player

    //Function for keydown events

    if(game){
      switch(key) {
        case "ArrowLeft":
         game.player.directionX = 0;
         break;

        case "ArrowUp":
          game.player.directionY = 0;
          break;
        
        case "ArrowRight":
          game.player.directionX = 0;

        case "ArrowDown":
          game.player.directionY = 0;
          break
         

      }
    }

  }  
   
}



// Associate the handleKeydown function with an Event listener
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('keyup', handleKeyup)
    
};

