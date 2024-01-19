class Game {
  constructor(startScreen, gameScreen, gameEndScreen) {
    this.startScreen = startScreen;
    this.gameScreen = gameScreen;
    this.gameEndScreen = gameEndScreen;
    this.player = null;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrecuency = 1000 / 60;
  }
}
