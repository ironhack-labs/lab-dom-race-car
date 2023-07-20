class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
        this.gameScreen,
        200,
        500,
        100,
        150,
        "./images/car.png"
    );
    this.width = 500;
    this.height = 600;

    this.obstacles = [];
    this.ispushingObstacle = false;

    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }
  gameLoop() {
    console.log("Game Loop");
    if (this.gameIsOver) {
      return;
    }
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }
  update() {
    this.player.move();
    let score = document.getElementById('score');
    let lives = document.getElementById('lives');

    score.innerHTML = this.score;
    lives. innerHTML = this.lives;
    if(this.lives === 0){
        this.endGame();
    }
    this.player.move();

    for (let i = 0; i < this.obstacles.length; i++){
        const obstacle = this.obstacles[i];
        obstacle.move();
        if(this.player.didCollide(obstacle)){
            obstacle.element.remove();
            this.obstacles.splice(i,1);
            this.lives --;
        }
        else if(obstacle.top > this.height){
            this.score ++;
            obstacle.element.remove();
            this.obstacles.splice(i,1);
        
    }

    }

    if(!this.obstacles.length && !this.ispushingObstacle){
        this.ispushingObstacle = true;
        setTimeout(()=>{
            this.obstacles.push(new Obstacle(this.gameScreen));
            this.ispushingObstacle = false;
        }, 500);
    }
  }
  endGame(){
    this.player.element.remove();
    this.obstacles.forEach(obstacle=>{
        obstacle.element.remove();
    })
    this.obstacles = [];
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block"
    }
  }
  
  