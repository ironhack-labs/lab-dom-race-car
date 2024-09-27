class Game {
  // constructor is a function that is going to be called any time that we create an object via class
  // It's useful to store all the properties that belong to the future project.
  constructor() {
    // Get all the possibles screens
    // Game-screen and game-end are initially hidden.
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    //player
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );

    //style for the game board
    this.width = 500;
    this.height = 600;
    // obstacles
    this.obstacles = [];

    // flag to give info about the process of pushing as obstacle
    this.isPushingObstacle = false;

    //Score
    this.score = 0;
    //lives
    this.lives = 3;
    //gameOver flag
    this.gameIsOver = false;
  }
  start() {
    // set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    // hide the start screen
    this.startScreen.style.display = "none";
    //show the game screen
    this.gameScreen.style.display = "block";
    // start the game loop
    this.gameLoop();
  }
  //creating an animation function
  gameLoop() {
    console.log("Game Loop");
    // check if the game's over to interrupt the game loop
    if (this.gameIsOver) {
      return;
    }
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }
  update() {
    // Bonus: scores and lives
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    this.player.move();

    // Check fo collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // Check if the player collided with an obstacle
      if (this.player.didColide(obstacle)) {
        // Remove the obstacle from the DOM
        obstacle.element.remove();

        // Remove obstacle from the array
        this.obstacles.splice(i, 1);

        // Reduce player's live by 1
        this.lives--;
      }
      // Check if an obstacle if off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // congratualions to you, you avoided on obstacle
        this.score++;

        // Remove the obstacle from the HTML
        obstacle.element.remove();

        // Remove the obstacle from the array of obstacles
        this.obstacles.splice(i, 1);
      }
    }

    if (!this.obstacles.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }
  }
  endGame() {
    // remove player
    this.player.element.remove();

    // removve all obstacles from the array of obstacles
    this.obstacles.forEach((obstacle) => {
      // remove from the HTML
      obstacle.element.remove();
    });

    this.obstacles = [];

    this.gameIsOver = true;

    // Hide the game screen
    this.gameScreen.style.display = "none";

    // show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
