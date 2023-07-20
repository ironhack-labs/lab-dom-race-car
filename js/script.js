window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });
   

  let game;

  restartButton.addEventListener('click', function(){
    location.reload();
    
   
  })



  
  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  //fuction addlistener add keydown and keyup: press the key and reslasing the key
  function handleKeyDown(event){
    const key = event.key;
    const possibleKeyStrokes = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown'
  
  
    ]
  
    if(possibleKeyStrokes.includes(key)) {
      event.preventDefault();

      if(game){
        switch(key){
          case 'ArrowLeft':
          game.player.directionX = -1
          break;
    
    
          case 'ArrowUp':
          game.player.directionY = -1
          break;
    
    
          case 'ArrowRight':
          game.player.directionX = 1
          break;
    
    
          case 'ArrowDown':
          game.player.directionY = 1
          break;
        }
      }
    }
    //only when the game is loaded can we move the character
  }
    


    function handleKeyUp(event){
      const key = event.key;
      const possibleKeyStrokes = [
        'ArrowLeft',
        'ArrowUp',
        'ArrowRight',
        'ArrowDown'
    
    
      ]
    
      if(possibleKeyStrokes.includes(key)) {
        event.preventDefault();

        if(game){
          switch(key){
            case 'ArrowLeft':
            game.player.directionX = 0
            break;
      
      
            case 'ArrowUp':
            game.player.directionY = 0
            break;
      
      
            case 'ArrowRight':
            game.player.directionX = 0
            break;
      
      
            case 'ArrowDown':
            game.player.directionY = 0
            break;
          }
        }
      }
      //only when the game is loaded can we move the character
    
     

};
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

}
