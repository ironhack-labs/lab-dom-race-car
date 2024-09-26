class Player {
    constructor(gameScreen, left, top, width, height, img) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");

        this.element.src = img;
        this.element.style.position = "absolute";           // esta propiedad hace que el Player este posicionado en la pantalla del juego. 

        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);          // agregamos el elemento recien creado al archivo gameScreem ( donde aparecera el player, digamos que en la "game-board").
    }



    // el Player debe tener una serie de metodos para poder interactuar/jugar 


    // con este metodo movemos al jugador usando la X e Y
    move() {
        this.left += this.directionX;               // le decimos que se mueva a la izquieda porque la X la inicializamos en 0 y le camos sumando this.left. 
        this.top += this.directionY;                                   // igual pero respecto al eje Y 

        if (this.left < 10) {
            this.left = 10;
        }                                                              // nos aseguramos de que el Player permanecca en la pantalla de juego.          

        if (this.top < 10) {
            this.top = 10;
        }

        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {                                // aqui nos aseguramos de que el jugador permaneciendo en los limites de la pantalla de juego. 
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }


        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }

        this.updatePosition();                                                                      // aqui aztualizamos la posicion del Player con el metodo creado. 
    }



    didCollide(obstacle) {                                                                      // Actualiza la posición del elemento del jugador en la pantalla respecto a left y a top.       
        const playerRect = this.element.getBoundingClientRect();        // Método que devuelve un tobjeto que proporciona el tamaño de un elemento y su posición(relativa) respecto a la pantalla de juego
        const obstacleRect = obstacle.element.getBoundingClientRect(); 


        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top                                                // con esto nos aseguramos que es obstaculo impacta en cualquiera de l as direccciones. 
        ) {
            return true;
        } else {
            return false;
        }
    }


    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;                                                // ajustamos las posiciones respectivas al eje X e Y para que se aztualicen.    
    }

}
