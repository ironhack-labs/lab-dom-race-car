class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player(this.gameScreen, 200, 500, 100, 150, "../images/car.png");
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
        this.loadingObstacle = false;
    }

    start(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.gameLoop();
    }

    gameLoop(){
        if(this.gameOver){
            return
        }
        this.update()

        // window and requestAnimationFrame is part of javascript and they are going to grab the entire window of the browser and create an Animation with 60 frames per second.
        window.requestAnimationFrame(() => this.gameLoop())
    }

    update(){
        this.player.move()
        for (let i=0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();

            //check for collision
            if(this.player.didCollide(obstacle)){
                this.lives --;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
            }
            else if(obstacle.top > this.height){
                this.score ++;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
            }

            if(this.lives === 0){
                this.endGame();
            }
        };

        let score = document.getElementById("score");
        let lives = document.getElementById("lives");
        score.innerHTML = this.score;
        lives.innerHTML = this.lives;
        if(!this.obstacles.length && !this.loadingObstacle){
            this.loadingObstacle = true;
            setTimeout(() =>{
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.loadingObstacle = false;
            }, 500);
        }
        
    }
    endGame(){
        this.gameOver = true;
        this.player.element.remove();
        this.obstacles.forEach(obstacle=>{
            obstacle.element.remove();
        });
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
    reset() {
        this.obstacles = [];
        this.player.left = 200;
        this.player.top = 500;
        this.score = 0;
        this.lives = 3;
        this.gameEndScreen.style.display = "none";
        this.gameOver = false;
        this.gameLoop();
    };
};