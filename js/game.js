class Game {
    constructor() {
      // get all screens. 
      // game and gameEnd are initially hidden
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      
      // we need to create assing the player to a player Class. Leave it to null for now and then we add the player class. 
      // this. player = null;

      // player info
      this.player = new Player(
        this.gameScreen,
        200,
        500,
        100,
        150,
        "./images/car.png"
      );

      // style for the game board
      this.height = 600;
      this.width = 500;

      // obstacles that we're going to have. 
      this.obstacles = [];

      // flag to give an info if we're pushing an obstacle
      this.isPushingObstacle = false;

      // score
      this.score = 0;

      // lives
      this.lives = 3;

      // variable to check if the game is over.
      this.gameIsOver = false;
    }
  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
      
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      // Start the game loop
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

      let score = document.getElementById('score');
      let lives = document.getElementById('lives');

      score.innerHTML = this.score;
      lives.innerHTML = this.lives;
      this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
        if (this.player.didCollide(obstacle)) {
          obstacle.element.remove();

          this.obstacles.splice(i, 1);
          this.lives--;
        } 

        else if (obstacle.top > this.height) {
          this.score++;
          obstacle.element.remove();

          this.obstacles.splice(i, 1);
        }
      }

      if (this.lives === 0) {
        this.endGame();
      }
      
      if(!this.obstacles.length && !this.isPushingObstacle){
      this.isPushingObstacle = !this.isPushingObstacle;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle = !this.isPushingObstacle;
      }, 500);
    }
    }

    endGame() {
      this.player.element.remove();
      this.obstacles.forEach(obstacle => {
    });
    
      this.gameIsOver = true;

      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
    }
  }