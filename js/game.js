class Game {
  // code to be added
  constructor(
    startScreen,
    gameScreen,
    gameEndScreen,
    player,
    height,
    width,
    obstacles,
    score,
    lives,
    gameIsOver,
    gameIntervalId,
    gameLoopFrequency
  ) {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1e6 / 60) / 1000; // More precise 60 fps
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    
    // Hide start screen and show game screen
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {

  }
}
