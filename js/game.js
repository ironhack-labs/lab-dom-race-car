class Game {
    // a function that is going to be called any time that we create an object via class

    // it's useful to store all the properties that belong to the future object.
    constructor(){
        // get all the possible screens
        // game-screen and game-end are initially hidden
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')

        // player
        this.player = new Player(
            this.gameScreen, 200, 500, 100, 150, "./images/car.png"
        );

        // style for the game board

        this.width = 500;
        this.height = 600;

        // obstacles
        this.obstacles = []

        // flag to give info about pushing an obstacle
        this.isPushingObstacle = false

        //{trees: [], rocks: []}

        // score
        this.score = 0;

        // lives
        this.lives = 3;

        // gameOver flag
        this.gameOver = false;
    
    }

    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`

        // Hide the start Scren
        this.startScreen.style.display = 'none';

        //Show the Game Screen

        this.gameScreen.style.display = 'block'

        //Start the Game Loop
        this.gameLoop()
    }

    //Creating an Animation Function
    gameLoop(){
        console.log('Game Loop')

        //Check if the game's over to interrrups the game loop
        if(this.gameIsOver){
            return;
        }

        this.update()

        window.requestAnimationFrame(()=>this.gameLoop())

    } 

    update(){
        //Bonus: scores and lives

        let score = document.getElementById('score')
        let lives = document.getElementById('lives')

        score.innerHTML = this.score
        lives.innerHTML = this.lives

        if(this.lives === 0) {
            this.endGame()
        }

        this.player.move()

        // Check for collision and if an obstacle is still on the screen
        for (let i=0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i]
            obstacle.move()

            //Check if the player collided with an obstacle
            if (this.player.didCollide(obstacle)){
                //remove the obstacle from the DOM
                obstacle.element.remove()     

                //remove obstacle from the array
                this.obstacles.splice(i,1)

                //reduce player's live by 1
                this.lives --
                

            }

            //Check if the obstacle is off the screen (at the bottom)
            else if(obstacle.top > this.height){
                //Congrats, you avoided one obstacle, gain points
                this.score++


                //remove the obstacle from the HTML
                obstacle.element.remove()

                //Remove the obstacle from the array of obstacles
                this.obstacles.splice(i, 1)
            }


        }


        //Update Obstacles
        if(!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true;
            setTimeout(()=>{
                this.obstacles.push(new Obstacle(this.gameScreen))
                this.isPushingObstacle = false
            }, 500)
        }



    }
    endGame(){
        //remove player
        this.player.element.remove()

        //remove all obstacles from the array of obstacles
        this.obstacles.forEach(obstacle => {
            obstacle.element.remove()
        })
        
        this.obstacles =[]
        this.gameIsOver = true

        //hide the game screen

        this.gameScreen.style.display = 'none'

        //Show end game screen
        this.gameEndScreen.style.display = "block"
    }

}