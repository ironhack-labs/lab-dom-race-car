class Game {
    constructor(){
    this.Startscreen = document.querySelector('#game-intro');
    this.gameScreen = document.querySelector('#game-screen');
    this.gameEndScreen = document.querySelector('#game-end');
    this.scoreElement = document.querySelector('#score');
    this.livesElement = document.querySelector('lives');
    this.player = new Player(this.gameScreen, 100, 370, 125, 250, '../images/car.png');
this.player = null;
this.height = 600;
this.width = 500;
this.obstacles = [new Obstacle(this.gameScreen)];
this.score = 0;
this.lives = 3;
this.gameIsOver = false;
this.gameIntervalId = null;
this.gameLoopFrequency = Math.round(1000/60);
this.counter = 1
    }
    start(){
        this.gameScreen.style.height = '${this.height}px' ;
        this.gameScreen.style.width = '${this.width}px' ;
    this.Startscreen.style.display = 'none';
    this.gameScreen.style.display = 'block';

    this.gameIntervalId = setInterval(() => {
        this.gameloop();
        this.counter++;
        if(this.counter % 200 === 0){
            this.obstacles.push(new Obstacle(this.gameScreen));
        }
    }, this.gameLoopFrequency);
    }
    gameloop(){

        this.update();
     for(let i=0; i<this.obstacles.length; i++){
     const oneObstacle = this.obstacles[i]
            oneObstacle.move();
        if(this.player.didCollide(oneObstacle)){
            this.obstacles.splice[i,1];
            i--;
            oneObstacle.element.remove();
        }
            if(oneObstacle.top > 600){
                oneObstacle.splice(i,1);
                this.score++;
                i--;
                oneObstacle.element.remove();

                console.log(this.score);
             this.scoreElement.innerText = this.score;
             this,lives --
             this.livesElement.innerText = this.lives;
             if(this.lives === 0){
                endGame();
             }
            }
     };
        if(this.gameIsOver){
            clearInterval(this.gameIntervalId);
        }
    }
    update(){
        console.log('this is the game update');
        this.player.move();
    }
    endGame(){
        console.log('game is over')
        this.gameIsOver = true; 
        this.player.element.remove();
        this.obstacles.forEach(obs =>{
            obs.element.remove();

        })
        this.gameScreen.style.display = 'none';
        this.gameEndScreen.style.display = 'block';
    }
}