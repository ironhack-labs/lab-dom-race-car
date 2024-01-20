class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new player(
      this.gameScreen,
      200, //this.left --> how far away the player is from the left side
      500, //this.right --> how far away the player is from the top
      100, //this.width --> the width of the player (image)
      150, //this.height --> the height of the player (image)
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstables = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrecuency = Math.round(1000 / 60); //60fps
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrecuency);
  }

  gameLoop() {
    console.log("in the game loop");
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    this.player.move();
  }
}
