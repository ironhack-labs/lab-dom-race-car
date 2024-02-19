class Player {
    constructor (gameScreen, left, top, width, height, imgSrc) {
        this.directionX = 0;
        this.directionY = 0;
        this.gameScreen = gameScreen;

        this.element = document.createElement("img");
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
        this.element.src = imgSrc;

        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        gameScreen.appendChild(this.element);
    }

    move() {
        // Update player's car position based on directionX and directionY
        this.left += this.directionX;
        this.top += this.directionY;
    
        // Ensure the player's car stays within the game screen
        // handles left hand side
        if (this.left <= 10) {
          this.left = 10;
          this.directionX *= -0.5; //para que el carro bounce
        }
    
        // handles top side
        if (this.top <= 10) {
          this.top = 10;
          this.directionY *= -0.5;
        }
    
        // handles right hand side
        if (this.left >= this.gameScreen.offsetWidth - this.width - 10) {
          this.left = this.gameScreen.offsetWidth - this.width - 10;
          this.directionY *= -0.5;
        }
    
        // handles bottom side
        if (this.top >= this.gameScreen.offsetHeight - this.height - 10) {
          this.top = this.gameScreen.offsetHeight - this.height - 10;
          this.directionY *= -0.5;
        }
    
        // Update the player's car position on the screen
        this.updatePosition();
    }


    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            console.log("Colliding");
            return true;
        } else {
            return false;
        }
    }

}

    