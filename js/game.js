class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');

        //player Info
        this.player = new Player(
         this.gameScreen,
         200,
         500,
         100,
         150,
         "./images/car.png"
        )
        
        this.width = 500;
        this.height = 600;
        
        this.obstacles = [];

        this.isPushingObstacles = false;

        //two diffrent obstacles
        // {trees: [], rock: []}

        this.score = 0;

        this.lives  = 3;

        this.gameIsOver = false;

    }
     
    //function to start game
    start (){
      //set the height and width of game
      this.gameScreen.style.height = `${this.height}px`
      this.gameScreen.style.width = `${this.width}px`

      //Hide start screen 
      this.startScreen.style.display = 'none'

      //Show game screen
      this.gameScreen.style.display = 'block'

      //start the Game Loop
      this.gameLoop();
      
    }
   
   //Create an Animation Function 
    gameLoop(){
     
        console.log('Game Loop');


        //CXheck if game's over to interrupt thr game loop
        if(this.gameIsOver){
            return;
        }

        this.update();

        window.requestAnimationFrame(() =>this.gameLoop()) 
    }

    update(){
        //Write later the code 
        this.player.move();

       


        let score = document.getElementById('score');
        let lives = document.getElementById('lives');

        if(this.lives === 0){
            this.endGame();
        }

        score.innerHTML= this.score;
        lives.innerHTML = this.lives;

        this.player.move();

        for(let i =0; i < this.obstacles.length; i++){
           const obstacle =this.obstacles[i];
           obstacle.move();
           if (this.player.didCollide(obstacle)){
            obstacle.element.remove();
            this.obstacles.splice(i,1);
            this.lives--;

           }else if(obstacle.top > this.height){
            this.score++;

            obstacle.element.remove();

            this.obstacles.splice(i,1);
           }
        }

        if(!this.obstacles.length && !this.isPushingObstacles){
            this.isPushingObstacles = true;
            setTimeout(() =>{
                this.obstacles.push(new Obstacles(this.gameScreen))
                this.isPushingObstacles = false;
            }, 500)
        }




    }

    endGame(){
        this.player.element.remove();
        this.obstacles.forEach(obstacles =>{
            obstacles.element.remove();
        })
        this.obstacles = [];

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";

        this.gameEndScreen.style.display = 'block'
    }

}

