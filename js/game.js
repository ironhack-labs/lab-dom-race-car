const gameFrame = Math.round(1000 / 60);
const gameHeight = 600;
const gameWidth = 500;

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
    this.height = gameHeight;
    this.width = gameWidth;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrecuency = gameFrame;
  }
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameScreen.appendChild(document.getElementById("score-lives"));
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
    //newObstacle = new Obstacle(this.gameScreen);
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        document.getElementById("lives").innerText = this.lives;
        i--;
      } else if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.score++;
        document.getElementById("score").innerText = this.score;
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.player.element.remove();
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    this.gameEndScreen.appendChild(document.getElementById("score-lives"));
  }
}
