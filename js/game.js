class Game {
  //function that is going to be called anytime that we create an object via class

  // It's useful to store all the properties that belong to the future object
  constructor() {
    // get  all the possible screens
    // game--screen and game end are initially hidden
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
    this.height = 610;

    //obstacles - they all look the same so an array is better to define them
    this.obstacles = [];

    //flag to give info about process of pushing an obstacle
    this.isPushingObstacle = false;

    // trees and rocks
    //{trees: [], rocks: []}

    //score
    this.score = 0;

    //lives
    this.lives = 3;

    // gameOver flag
    this.gameIsOver = false;
  }

  start() {
    // set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // hide the start screen
    this.startScreen.style.display = "none";

    // show the gameScreen
    this.gameScreen.style.display = "block"; // displaying as a block element

    // Start the game loop
    this.gameLoop();
  }

  // Creating an Animation Function

  gameLoop() {
    console.log("Game Loop");

    // Check if the game is over to interrupt the game loop
    if (this.gameIsOver) {
      return;
    }
    // loop this within a certain velocity
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }
  update() {
    //BONUS: scores and lives
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    this.player.move();

    //Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // check if the player collided with an obstacle
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();

        // Remove obstacle from the array
        this.obstacles.splice(i, 1);

        //Reduce player's live by 1
        this.lives--;
      }

      // check if the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        //Congratulations to you, you avoided one obstacle
        this.score++;
        // remove the obstacle from the HTML
        obstacle.element.remove();
        // remove the obstacle from the array of obstacles
        this.obstacles.splice(i, 1);
      }
    }

    // update obstacles
    if (!this.obstacles.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }
  }
  endGame() {
    //remove player
    this.player.element.remove();

    //remove all obstacles
    this.obstacles.forEach((obstacle) => {
      obstacle.element.remove();
    });

    this.obstacles = [];
    this.gameIsOver = true;

    //Hide the game screen
    this.gameScreen.style.display = "none";

    //Show end game screen
    this.gameEndScreen.style.display = 'block';
  }
}
