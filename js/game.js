class Game {
    // code to be added
    // constructor is a function that is going to be called any time we create an object via class.

    // its useful to store all the properties that belong to the future object.
    constructor(){
        // get all the possibles screens.
        // game screen and game end are initially hidden.
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');

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
        this.height= 600;

        // obstacles
        this.obstacles = [];

        // flag to give info about process of pushing an obstacle
        this.isPushingObstacle = false;


        // score
        this.score = 0;

        // lives
        this.lives = 3;

        // game over flag
        this.gameIsOver = false;
    }

    start(){
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        
        // hide the start screen
        this.startScreen.style.display = "none";

        // hide the end of game screen
        this.gameEndScreen.style.display = "none";

        // show the game screen
        this.gameScreen.style.display = "block";

        // start the game loop
        this.gameLoop();
    }

    // creating an animation function
    gameLoop(){
        console.log('Game Loop');

        // check if the game is over to interrupt the game loop
        if(this.gameIsOver){
            return;
        } 

        this.update();

        window.requestAnimationFrame(()=>this.gameLoop());
    }

    update(){
  
    // Bonus: scores and lives
    let score = document.getElementById('score');
    let lives = document.getElementById('lives');

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if(this.lives ===0){
        this.endGame();
    }
    
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++){
        const obstacle = this.obstacles[i];
        obstacle.move();

        // Check if the player collided with an obstacle
        if (this.player.didCollide(obstacle)){
            // Remove the object from the DOM
            obstacle.element.remove();

            // Remove obstacle from the Array
            this.obstacles.splice([i], 1);

            // Reduce player's life by 1
            this.lives--;

        }
        // Check if the obstacle is off the screen ( at the bottom)
        else if(obstacle.top > this.height){
            // congratulations to you, you avoided one obstacle
            this.score++;

            // Remove the obstacle from the HTML
            obstacle.element.remove();

            // Remove the object from the array of obstacles
            this.obstacles.splice(i,1);
        }
    }



        // update obstacles
        if (!this.obstacles.length && !this.isPushingObstacle){
            this.isPushingObstacle = true;

            setTimeout(()=>{
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.isPushingObstacle = false;
            },500);

        }
    }
    endGame(){
        // Remove player
        this.player.element.remove();

        // Remove all obstacles from the array of obstacles
        this.obstacles.forEach(obstacle=>{
            // remove from the HTML
            obstacle.element.remove();
        });

        this.gameIsOver = true;

        // Remvoe the game screen
        this.gameScreen.style.display ='none';

        // show end game screen
        this.gameEndScreen.style.display = 'block';
    }


   

}