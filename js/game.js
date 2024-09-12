class Game {
  //constructor is a function that is going to be called any time that we create an object via class. It's useful to store all the properties that belong to the future object.
  constructor() {
    // get all the possible screens. Game screen and game end are initally hidden
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    //player - these are the input that correspond to the player class defined in player.js
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );

    //style for game board
    this.width = 500;
    this.height = 600;

    //obstacles - using an empty array because wel'll use it to store obstacles later. We are using an array instead of an object becasue they all look the same they dont have more detailed information. If our obstacles are more complex, then use an array with objects with arrays
    this.obstacles = [];

    //flag to give info about process of pushing an obstacle
    this.isPushingObstacle = false;

    //score
    this.score = 0;

    //lives
    this.lives = 3;

    //gameOver Flag - boolean that is used to keep track on whether the game is over
    this.gameIsOver = false;
  }

  //will always have this function (method)
  start() {
    //set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    //Hide the Start Screen
    this.startScreen.style.display = "none";

    //Show the Game Screen -- this means were displaying as a block element in HTML
    this.gameScreen.style.display = "block";

    //Start the Game Loop
    this.gameLoop();
  }

  // Creating an Animation Function
  gameLoop() {
    console.log("Game Loop");

    //Check if the game is over to interrupt the game loop

    //need to understand
    if (this.gameIsOver) {
      return;
    }
    this.update();
    //need to understand
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    //Bonus: scores and lives
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    this.player.move();

    //Check for collision and if an obstacle is still ont he screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      //Check if the player collied with an obstacle
      if (this.player.didCollide(obstacle)) {
        //rRemove the obstacle from the DOM

        obstacle.element.remove();

        //Remove the obstacle from the array
        this.obstacles.splice(i, 1);

        //Reduce player's lives by 1
        this.lives--;
      }

      //Check if the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        //CONGRATS you avoicded one obstacle
        this.score++;

        //Remove the obstacle from the HTML
        obstacle.element.remove();

        //Remove the obstacle from the array of obstacles
        this.obstacles.splice(i, 1);
      }
    }

    //Update Obstacles
    if (!this.obstacles.length && !this.isPushingObstacle) {
      this.isPushingObstacle = !this.isPushingObstacle;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle = !this.isPushingObstacle;
      }, 500);
    }
  }

  endGame() {
    //remove the player
    this.player.element.remove();

    //remove all obstacles from the array of obstacles
    this.obstacles.forEach((obstacle) => {
      //remove from the HTML
      obstacle.element.remove();
    });
    //removes all the elements from the array
    // this.obstacles = [];
    this.gameIsOver = true;

    //Hide the game screen
    this.gameScreen.style.display = "none";

    //Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
