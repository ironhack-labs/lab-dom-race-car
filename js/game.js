class Game {
  // code to be added
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameScreenEnd = document.getElementById("game-end");
    this.player = new Player(this.gameScreen, 275, 400, 140, 240);
    this.height = 700;
    this.width = 500;
    this.obstacles = [new Obstacles(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalid;
    this.gameLoopFrequency = Math.floor(1000 / 60);

    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");

    this.frames = 0;
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
    this.frames++;
    if (this.frames % 180 === 0) {
      this.obstacles.push(new Obstacles(this.gameScreen));
    }
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacles = this.obstacles[i];
      currentObstacles.move();

      if (this.player.didCollide(currentObstacles)) {
        currentObstacles.element.remove();
        this.obstacles.splice(i, 1);
        i--;

        this.lives--;
        this.livesElement.innerText = this.lives;
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      if (currentObstacles.top >= 600) {
        currentObstacles.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        this.score++;
        this.scoreElement.innerText = this.score;
      }
    }
  }

  gameOver() {
    console.log("game is over");
    this.gameScreen.style.display = "none";
    this.gameScreenEnd.style.display = "block";
  }
}
