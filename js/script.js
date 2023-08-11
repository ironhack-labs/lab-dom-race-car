window.onload = function () 
{
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const stats = document.querySelector(".stats");
  let game;

  startButton.addEventListener("click", function () 
  {
    startGame();
  });

  restartButton.addEventListener("click", function(){location.reload()})

  function startGame() 
  {
    game = new Game();

    game.start();
  }

  document.addEventListener("keydown", function(e)
  {
    if(e.key === "ArrowLeft") game.player.directionX = -2;
    if(e.key === "ArrowRight") game.player.directionX = 2;
    if(e.key === "ArrowUp") game.player.directionY = -2;
    if(e.key === "ArrowDown") game.player.directionY = 2;
  })
};
