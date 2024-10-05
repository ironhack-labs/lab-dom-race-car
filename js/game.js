class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-end");
    this.scoreElement = document.querySelector("#score");
    this.livesElement = document.querySelector("#lives");
    this.player = new Player(200, 420, 100, 200, "../images/car.png");
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle()];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60; //60 frames per second
    this.counter = 0;
  }

  start() {
    //this sets the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    //this hides the start screen
    this.startScreen.style.display = "none";
    //this shows the game screen
    this.gameScreen.style.display = "block";
    //this starts the loop for the game
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();
    //this checks when the fame is over and if so stops the game
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    //increment the counter so we can add obstacles when it is a certain number
    this.counter++;
    //this updates the player on the DOM based on the directions of the player
    this.player.move();
    //this will move all of the obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      //this is checking for collisions
      const didCollide = this.player.didCollide(currentObstacle);
      if (didCollide) {
        this.obstacles.splice(i, 1);
        currentObstacle.element.remove();
        this.lives--;
        this.livesElement.innerText = this.lives;
      }

      //this checks the top of the obstacle and if it is greater than
      //the height of the game screen then it increases the score
      //and removes the obstacle
      if (currentObstacle.top > this.height + 50) {
        this.score++;
        this.scoreElement.innerText = this.score;
        this.obstacles.splice(i, 1);
        currentObstacle.element.remove();
        i--;
      }
    }
    if (this.lives === 0) {
      this.gameIsOver = true;
      this.player.element.remove();
      this.obstacles.forEach((e) => e.element.remove());
      //hide the game screen and show the end screen
      this.gameScreen.style.display = "none";
      this.endScreen.style.display = "block";
    }

    //this adds a new obstacle every so many frames
    if (this.counter % 140 === 0) {
      this.obstacles.push(new Obstacle());
    }
  }
}
