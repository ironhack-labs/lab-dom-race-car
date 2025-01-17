class Game {
  // code to be added
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameText = document.getElementById("game-container")
    this.player = new Player(this.gameScreen, 200, 500, 100, 150);
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 99;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.scorePosition = document.getElementById("score")
  }

  start() {
    console.log(`gamestarrrtt!!!`);
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameScreen.style.position = "relative"
    this.gameText.style.fontFamily = "roboto";
    this.gameText.style.position = "absolute";
    this.gameText.style.paddingLeft = "150px"
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    console.log("in the game looooooooooop!");
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    console.log("updates yay!");
    this.player.move();
    let lives = document.getElementById("lives");
    let score = document.getElementById("score");
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        lives.innerHTML = this.lives;
        i--;
      } else if (obstacle.top > this.height) {
        this.score++;
        score.innerHTML = this.score;
        obstacle.element.remove();
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
    this.player.car.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
