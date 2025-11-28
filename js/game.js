class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.player = new Player(this.gameScreen, 285, 400, 130, 240);
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 1;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.floor(1000 / 60);

    //the score element from the HTML
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");

    //this is the counter to keep track of the frames
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
    //this adds one to the frames
    this.frames++;
    if (this.frames % 200 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    this.player.move();

    //loop for the obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      //this is for when there is a collision
      if (this.player.didCollide(currentObstacle)) {
        //remove the img for the DOM
        currentObstacle.element.remove();
        //remove the obstacle from the array
        this.obstacles.splice(i, 1);
        i--;

        //subtract one life
        this.lives--;
        this.livesElement.innerText = this.lives;
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      //this is for when the red car goes off the page
      if (currentObstacle.top >= 600) {
        //remove the img for the DOM
        currentObstacle.element.remove();
        //remove the obstacle from the array
        this.obstacles.splice(i, 1);
        i--;
        //add one point to the score
        this.score++;
        this.scoreElement.innerText = this.score;
      }
    }
  }
  gameOver() {
    console.log("game is over");
    //hide the game screen
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
  }
}