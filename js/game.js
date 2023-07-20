class Game {
  // constructor is a function that is going to be called any time that we create an object via class
  // it's useful to store all the properties that belong to the future object
  constructor() {
    //STEP 1. get all the possible screens
    // game screen and end are initially hidden
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    //deifine player
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

    //create obstacles
    this.obstacles = [];

    //flag ti give info about process of pushing an obstacle
    this.isPushingObstacle = false;

    //create score
    this.score = 0;

    //lives
    this.lives = 3;

    //gameOver flag
    this.gameIsOver = false;
  }

  //STEP 2. first function- start
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    //once the game has statted, you have to hide the start screen
    this.startScreen.style.display = "none";

    //now show game screen
    this.gameScreen.style.display = "block";

    //start the game loop
    this.gameLoop();
  }

  //STEP 3. second function-gameloop
  //creating animation function

  gameLoop() {
    console.log("Game Loop");

    //check if the game is over to interrup the game loop:
    if (this.gameIsOver) {
      return;
    }

    //request animation to check process and verify if there is something new
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  //STEP 4. third function- update
  update() {
    //bonus:scores and lives
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    this.player.move();

    //check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      //check if the players collided with an obstacle
      if (this.player.didCollide(obstacle)) {
        //remove the obstacle from the DOM (aka HTML)
        obstacle.element.remove();

        //remove obstacle from the array
        this.obstacles.splice(i, 1);

        //reduce player's lives by 1 if they crash against an obstacle
        this.lives--;
      }
      //check if the obstacles is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        //congratulations, you avoided one obstacle
        this.score++;

        //remove the obstacle from the HTML
        obstacle.element.remove();

        //remove the obstacle from the array of obstacles
        this.obstacles.splice(i, 1);
      }
    }

    //update obstacles
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

    //remove all the obstacles from the array of obstacles
    this.obstacles.forEach((obstacle) => {
      obstacle.element.remove();
    });

    this.obstacles = [];
    this.gameIsOver = true;

    //hide the game screen
    this.gameScreen.style.display = "none";

    //show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
