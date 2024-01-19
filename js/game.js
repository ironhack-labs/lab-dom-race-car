class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.lastObstacleTime = 0;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    console.log("in the game loop");
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    console.log("in the update");
    this.player.move();

    const currentTime = Date.now();
    const timeSinceLastObstacle = currentTime - this.lastObstacleTime;

    if (timeSinceLastObstacle >= 2000) {
      this.obstacles.push(new Obstacle(this.gameScreen));
      this.lastObstacleTime = currentTime;
    }
    
    this.obstacles = this.obstacles.filter((obstacle) => {
        obstacle.move()
    if(obstacle.top < 700){
    return true;
  } else {
      obstacle.remove();
      return false;
    }
});
}

}