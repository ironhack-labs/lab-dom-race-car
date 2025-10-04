class Game {
    // code to be added
     constructor (){
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen= document.getElementById("game-end");
    this.player= null;
    this.height=600;
    this.width=500;
    this.obstacles=[];
    this.score= 0;
     this.lives=3
     this.gameIsOver=false;
     this.gameIntervalId;
     this.gameLoopFrequency=Math.round(1000/60);


    this.player = new Player(this.gameScreen, 200, 500, 100, 150, "images/car.png");

     }

 start(){
this.gameScreen.style.height=` ${this.height}px`;
this.gameScreen.style.width= `${this.width}px`;
this.startScreen.style.display= `none`;
this.gameScreen.style.display = `block`;

 this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)
    
 }

gameLoop(){

     if (!this.gameIsOver) {
      this.update();
    } else {
      clearInterval(this.gameIntervalId);
      this.endGame();
    }
}


update(){

    this.player.move();

    // Randomly generate a new obstacle (2% chance per frame)
    if (Math.random() < 0.02) {
      const newObstacle = new Obstacle(this.gameScreen);
      this.obstacles.push(newObstacle);
    }

    // Update obstacles
    this.obstacles.forEach((obstacle, index) => {
      obstacle.move();

      // Collision with player
      if (this.player.didCollide(obstacle)) {
        this.lives--;
        obstacle.element.remove(); 
        this.obstacles.splice(index, 1);
      }

      
      else if (obstacle.top > this.gameScreen.offsetHeight) {
        this.score++;
        document.getElementById("score").textContent = this.score;
        obstacle.element.remove();
        this.obstacles.splice(index, 1);
      }
    });

    
    if (this.lives <= 0) {
      this.gameIsOver = true;
    }

    
    document.getElementById("lives").textContent = this.lives;

}
 endGame() {
  
    this.player.element.remove();

    this.obstacles.forEach(obstacle => obstacle.element.remove());

    this.obstacles = [];

    
    this.gameIsOver = true;

    
    this.gameScreen.style.display = "none";

    this.gameEndScreen.style.display = "block";
  }
}