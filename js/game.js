// constructor() {}
// new Game()
class Game {
  constructor() {
    (this.startScreen = document.getElementById("game-intro")),
      (this.gameScreen = document.getElementById("game-screen")),
      (this.gameEndScreen = document.getElementById("game-end")),
      (this.player = null),
      (this.height = 600),
      (this.width = 500),
      (this.obstacles = []),
      (this.score = 0),
      (this.lives = 3),
      (this.gameIsOver = false),
      (this.gameIntervalId = gameIntervalId),
      (this.gameLoopFrecuency = 1000 / 60);
  }

  start() {
    this.startScreen.style.classList.remove("show");
    this.gameScreen.style.classList.add("show");
    this.setInterval(gameLoop(), gameLoopFrecuency);
  }

  gameLoop() {
    if (gameIsOver) {
      clearInterval(gameIntervalId);
      return;
    }
    this.game.update();
  }

  update() {}
}
