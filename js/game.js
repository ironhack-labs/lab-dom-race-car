class Game {
constructor(){
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.player=null
    this.height=600
    this.width=500
    this.obstacles=[]
    this.score=0
    this.lives=3
    this.gameIsOver=false
    this.gameIntervalId
    this.gameLoopFrecuency =Math.round( 1000 / 60);
    
}

start()
{
this.gameScreen.style.height=`${this.height}px`
}

gameLoop()
{

}

update()
{

}

}
