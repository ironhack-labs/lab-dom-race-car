class GameHandler extends GameObject {
  // code to be added
  constructor(gameScreen) {
    super();
    this.gameScreen = gameScreen;
    this.arrowLeft = false;
    this.arrowRight = false;
    this.arrowUp = false;
    this.arrowDown = false;
    this.scoreSpan = document.getElementById("score");
    this.livesSpan = document.getElementById("lives");
  }

  awake() {
    this.player = new Player("./images/car.png", 50, 100, 20);
    this.player.instantiateGameObject(this.gameScreen);
    this.obstacles = [];
    this.frameCounter = 0;
    this.lives = 3;
    this.livesSpan.textContent = this.lives;
    this.score = 0;
    this.scoreSpan.textContent = this.score;
  }

  start() {
    this.updateInterval = setInterval(() => this.update(), 1000 / 60);
  
  }

  stop() {
    clearInterval(this.updateInterval);
  }

  update() {
    if (this.lives === 0) {
      this.onGameEnded();
      return;
    }

    this.player.movePlayer(
      this.gameScreen,
      this.arrowLeft,
      this.arrowRight,
      this.arrowUp,
      this.arrowDown
    );

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      if (this.checkCollisions(this.player.element, obstacle.element)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
        this.livesSpan.textContent = this.lives;
      } else if (obstacle.top > this.gameScreen.clientHeight) {
        this.score += 10;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        this.scoreSpan.textContent = this.score;
      }
    }

    if (this.frameCounter % 100 === 0) {
      const newObstacle = new Obstacle("./images/redCar.png", 50, 100, -100);
      newObstacle.instantiateGameObject(this.gameScreen);
      this.obstacles.push(newObstacle);
    }
    this.frameCounter === 120 ? (this.frameCounter = 0) : this.frameCounter++;
  }

  onGameEnded() {
    if (this.lives === 0) {
      this.stop();
      pageHandler.changePages();
      this.player.removeObject();
      this.obstacles.forEach((obstacle) => obstacle.removeObject());
    }
  }

  changePlayer() {
    this.player.element.src = "./images/optimus-prime.png";
    this.isOptimusPrime = true;
    this.fireBalls = [];
    this.fireBallInterval = setInterval(
      () => this.fireBallCondition(),
      1000 / 60
    );
  }

  createFireBall() {
    if (this.isOptimusPrime) {
      const fireBall = new FireBall(
        "./images/fireball.gif",
        50,
        100,
        this.player.element.offsetTop + 25,
        this.player.element.offsetLeft - 25
      );

      const element = document.createElement("img");
      element.style.transform = "rotate(90deg)";
      element.src = "./images/fireball.gif";
      element.style.position = "absolute";
      element.style.width = 100 + "px";
      element.style.height = 50 + "px";
      element.style.top = this.player.element.offsetTop + 25 + "px";
      element.style.left = this.player.element.offsetLeft - 25 + "px";

      this.gameScreen.appendChild(element);
      fireBall.element = element;
      this.fireBalls.push(fireBall);
    }
  }

  fireBallCondition() {
    for (let i = 0; i < this.fireBalls.length; i++) {
      const fireBall = this.fireBalls[i];
      fireBall.move();
      if(fireBall.element.top< this.gameScreen.clientHeight){
        fireBall.element.remove();
        this.score += 100;
        i--;
        break;
      }
      for (let j = 0; j < this.obstacles.length; j++) {
        if (
          this.checkCollisions(
            fireBall.element,
            this.obstacles[j].element
          )
        ) {
          fireBall.element.remove();
          this.obstacles[j].element.remove();
          this.fireBalls.splice(i, 1);
          this.score += 100;
          i--;
          break;
        }
      }
    }
  }
}
