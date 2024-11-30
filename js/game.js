class Game {
    constructor () {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
          );
        this.height = 600;
        this.width = 500;
        this.obstacles = [new Obstacle(this.gameScreen)];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;

    }
    start() {
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
      this.gameScreen.style.display = 'block';
      this.startScreen.style.display = 'none';
      this.gameLoop();
      
      
    }
    gameLoop() {
        if(this.gameIsOver) {
            return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
    update() {
     console.log('in the update');
     this.player.move();
     const obstacle = this.obstacles[0];
     obstacle.move();
     
    const score = document.getElementById("score").innerHTML = this.score;
    const live = document.getElementById("lives").innerHTML = this.lives;

     if (this.player.didCollide(obstacle)) {
        this.lives--;
        obstacle.element.remove();
        this.obstacles = [];
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
  
      if (obstacle.top > this.height) {
        if (Math.random() > 0.98) {
          obstacle.element.remove();
          this.obstacles = [];
          this.obstacles.push(new Obstacle(this.gameScreen));
          this.score++;
        }
      }
      if (this.lives === 0) {
        this.endGame();

      }
      if (this.score === 5) {
        this.winGame();
      }
 }

  reset() {
    location.reload();
  }

  winGame() {
    const h2 = document.createElement("h2");
    h2.innerHTML = `YOU WIN MY FRIEND:::DIRECTLY!`;
    h2.style.color = "aliceblue";
    h2.style.fontSize = '50px';
    h2.style.fontFamily = 'arial';
    this.gameScreen.appendChild(h2);
    this.score = 0;
    setTimeout(() => this.reset(), 2000)
  }




 endGame() {
    const h2 = document.createElement("h2");
    h2.innerHTML = `YOU LOSE MY FRIEND:::DIRECTLY!`;
    h2.style.color = "black";
    h2.style.fontSize = '50px';
    h2.style.fontFamily = 'arial';
    this.gameScreen.appendChild(h2);
    this.lives = 3;
    
    setTimeout(() => this.reset(), 2000)
    
    

 }
}
