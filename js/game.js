class Game {
  constructor(){
    this.startScreen = document.getElementById('game-intro');
    this.gameScreen = document.getElementById('game-screen');
    this.gameEndScreen = document.getElementById('game-end');
    this.scoreElement = document.getElementById('score');
    this.livesElement = document.getElementById('lives'); // Define livesElement
    this.player = new Player(
      this.gameScreen,
      200,
      300,
      100,
      200,
      "../images/car.png"
    );
    this.height= 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen,"../images/redCar.png")];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = 0;
    this.gameLoopFrequency = Math.round(1000/60);
  }

  start(){
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    
    }, this.gameLoopFrequency);
  }
  restart(){
    this.gameIsOver = false;
    this.score = 0;
    this.lives = 1;
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.display = "block"
    this.obstacles.push(new Obstacle(this.gameScreen))
    this.start();
  }

  gameLoop(){
    this.update();
    if(this.gameIsOver){
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }

  update(){
    this.player.move();
    this.obstacles.forEach((oneObstacle, index) => {
      oneObstacle.move();

      // If the obstacle goes off the bottom of the screen
      if(oneObstacle.top > 700){
        console.log("You scored a point")
        this.obstacles.splice(index, 1);
        oneObstacle.element.remove();
        this.obstacles.push(new Obstacle(this.gameScreen, "../images/redCar.png"));
        this.score++;
        this.scoreElement.innerText = this.score;
      }

      // Check collision with player
      if(this.player.didCollide(oneObstacle)){
        console.log('bang !!! there was a collision')
        this.obstacles.splice(index, 1);
        oneObstacle.element.remove();
        this.obstacles.push(new Obstacle(this.gameScreen, "../images/redCar.png"));
        this.lives--;
        this.livesElement.innerText = this.lives;

        if (this.lives === 0){
          this.gameIsOver = true;
        }
      }
    });
  }

  gameOver(){
    console.log('the game is over')
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = 'block';
  }
}
