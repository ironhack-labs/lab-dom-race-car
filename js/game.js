class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player(
            this.gameScreen, 200, 500, 100, 150, "images/car.png"
        )
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.loadingObstacle = false;
    }
    start(){

        this.gameScreen.style.width = this.width + "px";
        this.gameScreen.style.height = this.height + "px";
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }
    gameLoop(){
        if(this.gameIsOver){ return }
        this.update();
        
        window.requestAnimationFrame(()=>{
            this.gameLoop()
            }
        ) 
        
    }
    update(){
        let score = document.getElementById("score");
        let lives = document.getElementById("lives");
        score.innerHTML = this.score
        lives.innerHTML = this.lives
        this.player.move()
        for(let i=0; i<this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();

            //check for collision
            if(this.player.didCollide(obstacle)){
                obstacle.element.remove()
                this.obstacles.splice(i, 1)
                this.lives--;

            }
            else if(obstacle.top > this.height){
                this.score++
                obstacle.element.remove()
                this.obstacles.splice(i, 1)
            }
        }
        if(this.lives === 0){
            this.endGame();
      
        }
        if(!this.obstacles.length && !this.loadingObstacle && !this.gameIsOver){
            this.loadingObstacle = true;
            this.timer = setTimeout(()=>{
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.loadingObstacle = false;
                console.log("test")
            },1000)
        }
    }
    endGame(){
        this.gameIsOver = true;
        this.player.element.remove();

        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
        lives.innerHTML = 0;

        this.obstacles.forEach(obstacle=>{
            obstacle.element.remove()
        })

        return
       
    }
}