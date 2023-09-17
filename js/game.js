class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
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
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameLoop();
  }

  gameLoop() {
    // console.log("in the game loop");

    if (this.gameIsOver) {
      return true;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    // console.log("in the update");

    this.player.move();

    for (let i = 0; i < this.obstacles.length; i += 1) {
      let obs = this.obstacles[i];
      obs.move();

      if (this.player.didCollide(obs) === true) {
        obs.element.remove();
        this.obstacles.splice(i, 1);

        this.lives -= 1;

        i--;
      } else if (obs.top > this.height) {
        this.score += 1;
        obs.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    // Bonus iteration 10;
    document.getElementById("score").innerHTML = this.score;
    document.getElementById("lives").innerHTML = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
