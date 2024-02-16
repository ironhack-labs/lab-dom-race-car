class Game {
    constructor() {
      this.startScreen = document.querySelector("#game-intro");
      this.gameScreen = document.querySelector("#game-screen");
      this.gameEnd = document.getElementById("game-end");
      this.player = new Player(
        this.gameScreen,
        200,
        490,
        100,
        150,
        "./images/redCar.png"
      );

      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;
      this.gameOver = false;
      this.gameIntervalId = null;
      this.gameLoopFrequency = 1000 / 60;
    }
  
    start() {
      console.log(this.gameScreen);
      console.log(this.gameEnd);
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
  
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
      this.gameIntervalId = setInterval(() => {
        this.gameLoop();
      }, this.gameLoopFrequency);
    }
  
    gameLoop() {
      this.update();
  
      // If "gameIsOver" is set to "true" clear the interval to stop the loop
      if (this.gameOver) {
        clearInterval(this.gameIntervalId);
      }
    }
  
    update() {
      this.player.move();
    }
  }
