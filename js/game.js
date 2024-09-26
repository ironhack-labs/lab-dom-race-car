//la clase Game se encarga de gestionar los datos y el comportamiento del juego. 
// la clase Game debe de tener una propiedades definidas por el constructor. 

class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
        );                                                      //anteriormente la definimos asi y ahora la daremos propiedades this.player = null; 
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }


    //debe tener un metodo, en este caso llamado start que hace x cosas CUANDO SE LE LLAMA.
    start() {

        this.gameScreen.style.height = `${this.height}px`;          // establecemos la altura y el ancho del juego. 
        this.gameScreen.style.width = `${this.width}px`;            // llamamos a starScreen ya que es la pantalla de inicio. 
        this.startScreen.style.display = "none";                    // ocultamos la pantalla del juego con css display = "none";              
        this.gameScreen.style.display = "block";                 // llamamos a gameScreen ya que es la pantalla del juego. 




        this.gameLoop();                                                 // lo llamamos dentro porque va a comprobar y ejecutar ciertos pasos 
    }

    gameLoop() {                                                         // comprueba si gameOver esta true/false.                                      
        // console.log("In Game");

        if (this.gameIsOver) {
            return;
        }

        this.update();

        window.requestAnimationFrame(() => this.gameLoop());
    }





    update() {                                                          // se encarga de aztualizar el juego. 
        // console.log("Updating");                                            
        this.player.move();                                              // agreguamos una llamada al player.move()método 


        for (let i = 0; i < this.obstacles.length; i++) {               //    Verifica si hay colisión y si todavía hay un obstáculo en la pantalla.  
            const obstacle = this.obstacles[i];
            obstacle.move();

            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();                                       // si colisiona elimina el obstaculo del DOM 
                this.obstacles.splice(i, 1);
                this.lives--;                                                       // elimina las vidas del jugador de 1 en 1 
                i--;
            }

            else if (obstacle.top > this.height) {
                this.score++;                                                       // si el obstaculo pasa de la gameScreen el score se incremeta en 1. 

                obstacle.element.remove();

                this.obstacles.splice(i, 1);                                      // en el caso de que colisones con el obstaculo elimina el obstaculo del array de obstaculos y aztualiza el score o la vida restandole 1.

                i--;
            }
        }
        if (this.lives === 0) {
            this.endGame();                                                     // si las vidas llegan a 0 el juego termina 
        }



        if (Math.random() > 0.99 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen));                 // creamos un nuev obstaculo basadon en probabilidad ramdom cuando no hay otro obstaculo en pantalla
        }
    }

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());                              // Elimina un jugador y todos los obstáculos del DOM.

        this.gameIsOver = true;                                                                               // establece un Game Over 

       
        this.gameScreen.style.display = "none";                                                                 // muestra la pantalla final del juego 
        this.gameEndScreen.style.display = "block";
    }
}

