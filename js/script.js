window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let myGame = new Game();
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener('click',()=>{
   // location.reload();
   myGame = new Game();
   startGame();
  })
document.addEventListener('keydown', (event) => {
  console.log('the key was pressed' , event.code);
  if(event.code === 'ArrowUp'){
    myGame.player.directionY = -1;

  }else if(event.code ==='ArrowDown'){
    myGame.player.directionY = 1;

  }else if(event.code ==='ArrowRight'){
    myGame.player.directionX = 1;

  }else if(event.code === 'ArrowLeft'){
    myGame.player.directionX = -1;
  }
})
document.addEventListener('keyup', () => {
  myGame.player.directionY = 0;
  myGame.player.directionX = 0;
})

  function startGame() {
    console.log("start game");
    myGame.start();
  }
};
