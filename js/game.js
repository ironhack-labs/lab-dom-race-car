class Game {
  // code to be added
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.getScore = document.querySelector("#score");
    this.getLive = document.querySelector("#lives");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "../images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }

    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    // console.log("in the update");
    this.player.move();
    // for (let i = 0; i < this.obstacles.length; i++) {
    //   const obstacle = this.obstacles[i];
    //   obstacle.move();
    // }
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(
        new Obstacle(this.gameScreen, "../images/redCar.png")
      );
    }

    if (this.obstacles.length) {
      const obstacle = this.obstacles[0];
      obstacle.move();
      if (this.obstacles.length && this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(0, 1);
        this.lives--;
        this.getLive.textContent = this.lives;
        console.log(this.lives);
      } else if (obstacle.top > this.height) {
        this.score++;
        this.getScore.textContent = this.score;
        obstacle.element.remove();
        this.obstacles.splice(0, 1);
      }
    }
    if (this.lives === 0) {
      this.endGame();
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(
        new Obstacle(this.gameScreen, "../images/redCar.png")
      );
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
