class Game {
    // code to be added
    constructor (){
        this.startScreen        = document.querySelector('#game-intro');
        this.gameScreen         = document.querySelector('#game-screen');
        this.gameEndScreen      = document.querySelector('#game-end');
        this.livesElement       = document.querySelector('#lives');
        this.scoreElement       = document.querySelector('#score');
        this.height             = 600;
        this.width              = 500;
        this.obstacles          = [];
        this.score              = 0;
        this.lives              = 3;
        this.gameIsOver         = false;
        this.genObstacle        = null;
        this.gameIntervalId     = null;
        this.gameLoopFrecuency  = Math.round(1000/60);
        
        this.gameScreen.style.position = "relative";
        
        let imgSrc  = '../images/car.png';
        this.player = new Player(this.gameScreen, 210, 510, 80, 130, imgSrc);
    }

    start (){
        this.gameScreen.style.height    = `${this.height}px`;
        this.gameScreen.style.width     = `${this.width}px`;
        this.startScreen.style.display  = "none";   //Hide Intro screen
        this.gameScreen.style.display   = "block";  //Show Game screen

        this.gameIntervalId             = setInterval(()=>{
            this.gameLoop();
        }, this.gameLoopFrecuency);

        this.genObstacle = setInterval(()=>{
            let imgSrc        = '../images/redCar.png';
            const newObstacle = new Obstacle(this.gameScreen);
            this.obstacles.push(newObstacle);
        }, 3000);
    }

    gameLoop (){
        this.update();
        
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
            clearInterval(this.genObstacle);
        }
    }

    update (){
        this.player.move();

        this.obstacles.forEach((obstacle, index) =>{
            obstacle.move();

            let didCollide = this.player.didCollide(obstacle);
            if (didCollide){
                obstacle.element.remove();      //Remove obstacle after collision
                this.obstacles.splice(index, 1) //Remove the obstacle from the JS array
                this.lives -= 1;
                this.livesElement.textContent = this.lives;

                //Check if all lives lost then end the game
                if (this.lives === 0){
                    this.endGame();
                };
            }
            else if (obstacle.top > this.height){
                this.score += 1;                //Player cleared 1 obstacle so increment score
                this.scoreElement.textContent = this.score;
                obstacle.element.remove();      //Remove obstacle after collision
                this.obstacles.splice(index, 1) //Remove the obstacle from the JS array
            }
        })
    }

    endGame(){
        this.player.element.remove();

        this.obstacles.forEach(obstacle =>{
            obstacle.element.remove();
        })

        this.gameIsOver = true;

        this.gameScreen.style.display   = "none";   //Hide Game screen
        this.gameEndScreen.style.display= "block";  //Show End game screen
    }
}