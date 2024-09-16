
// Iteration 1: Create the Game - create de game class. This class will be responsible for managing the game data and behavior.

class Game {
    // constructor is a function that is going to be called any time that we create an object via class
    // It's useful to store all the properties that belong to the future object

    constructor() {
        // get all the possible screens
        // game-screen and game-end are initially hiden
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');

        // player (Iteration 4: Add the Player to the Game)
        this.player = new Player (
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

        // obstacles - if the obstacles are all the same we use this, if not we can use an array of objects
        this.obstacles = [];

        /* if the objects are not the same, like trees and rocks:
        {trees: [], rocks: []} */

        // flag to give info about process of pushing an obstacle
        this.isPushingObstacle = false;

        // score
        this.score = 0;

        // lives
        this.lives = 3;

        //gameOver flag - when we achieve game over this it will be true while we do not achieve game over, it's false

        this.gameIsOver = false;
    }

    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        // Hide the Start Screen
        this.startScreen.style.display = "none";

        // Show the Game Screen
        this.gameScreen.style.display = "block"; // it means that this game has a block element in HTML

        // Start the Game Loop
        this.gameLoop();
    }
    // Creating an Animation Function
    gameLoop() {
        console.log("Game Loop");

        // Check if the game's over to interrupt the game loop
        if(this.gameIsOver) {
            return; // return to break the loop of this function
        }

        this.update();

        window.requestAnimationFrame(() => this.gameLoop()); // looping over the function to verify if there is something new
    }

    update() { // Iteration 4: Add the Player to the Game
        //this.player.move();

        // BONUS: scores and lives (BONUS - Iteration 10: Points, points, points)
        let score  = document.getElementById('score');
        let lives = document.getElementById('lives');

        score.innerHTML = this.score;
        lives.innerHTML = this.lives;

        if(this.lives === 0) {
            this.endGame();
        }

        this.player.move();

        // Check for collision and if an obstacles still on the screen
        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();

            // Check if the player collide with an obstacle
            if(this.player.didCollide(obstacle)) {
                // Remove the obstacle from the DOM/HTML
                obstacle.element.remove();

                // Remove obstacle from the array
                this.obstacles.splice(i,1);

                // Remove player's live by 1
                this.lives --; //instead of ++
            }


            // Check if the obstacle is off the screen (at the bottom)
            else if(obstacle.top > this.height) {
                // Congratulations to you, you avoided one obstacle
                this.score ++;

                // Remove the obstacle from the HTML
                obstacle.element.remove();

                // Remove the obstacle from the array of obstacles
                this.obstacles.splice(i,1); //i = index and 1 = only one element will be removed
            }
        }

        // Update Obstacles
        if(!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true;
            setTimeout(() => {
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.isPushingObstacle = false;
            }, 500);
        }
    }
    endGame() {
        // remove player
        this.player.element.remove();

        // Remove all obstacles from the array of obstacles
        this.obstacles.forEach(obstacle => {
            // Remove from the HTML
            obstacle.element.remove();
        })

        this.obstacles = [] // my obstacles array is empty

        this.gameIsOver = true;

        // Hide the game screen
        this.gameScreen.style.display = "none"; 

        // Show en game screen
        this.gameEndScreen.style.display = "block";
    }
}