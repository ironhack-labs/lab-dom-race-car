class Game {
    // constructor is a function that is going to be called any time that we create an object via class.
    // its useful to store all the properties that belong to the future object.
    constructor(){
        // get all the possible screens
        // game-screen and game-end are initially hidden
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");

        // player
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
        );

        // style for the game board
        this.width = 500;
        this.height = 600;

        // obstacles
        this.obstacles = [];

        // flag to give info about process pushing an obstacle
        this.isPushingObstacle = false;

        // score
        this.score = 0;

        // lives
        this.lives = 3;

        // gameover flag
        this.gameIsOver = false;
    }
    start(){
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        // Hide the start screen and show the game screen
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        // Start the game loop
        this.gameLoop();
    }

    // Creating an animation function
    gameLoop(){
        console.log("Game Loop");

        // Check if the game is over to interrupt the game loop
        if (this.gameIsOver) {
            return;
        }
        this.update();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update(){        
        //BONUS: Scores and lives
        let score = document.getElementById("score");
        let lives = document.getElementById("lives");
        
        score.innerHTML = this.score;
        lives.innerHTML = this.lives;
        
        if (this.lives === 0) {
            this.endGame();
        }

        this.player.move();

        // Check for collision and if an obstacle is still on the screen
        for (let i=0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();
            // Check if the players collided with an obstacle
            if (this.player.didColide(obstacle)) {
                // Remove the obstacle from the DOM
                obstacle.element.remove();
                // Remove the obstacle from the array
                this.obstacles.splice(i,1);
                // Reduce players live by 1
                this.lives --;
            }
            // Check if the obstacle is off screen (at the bottom)
            else if (obstacle.top > this.height){
                // Congratulations to you, you avoided one obstacle
                this.score++;
                // Remove the obstacle from the HTML
                obstacle.element.remove();
                // Remove the obstacle from the array of obstacles
                this.obstacles.splice(i,1);
            }
        }

        // Update obstacles
        if (!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true;
            setTimeout(() => {
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.isPushingObstacle = false;
            }, 500);
        }
    }
    endGame(){
        this.player.element.remove();
        this.obstacles.forEach(obstacle =>{
            obstacle.element.remove();
        })

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";

        this.gameEndScreen.style.display = "block";
    }
}