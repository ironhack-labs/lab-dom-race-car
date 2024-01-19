class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      225,
      500,
      50,
      100,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrecuency = 1000 / 60;
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
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    this.player.move();

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      //obstavle is not defined
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();

        this.lives--;
        document.getElementById("lives").innerHTML = this.lives;
        this.obstacles.splice(i, 1);

        i--;
      } else if (obstacle.top > this.top) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.score++;
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }

    //randomly generate obstacles
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    //remove player
    this.player.element.remove();
    //remove obstacles
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    document.getElementById("score").innerHTML = this.score;
  }
}
