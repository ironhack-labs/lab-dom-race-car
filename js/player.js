class Player {
    constructor(gameScreen, left, top, width, height, imageURL) {
        this.gameScreen = gameScreen;// the game screen element passed as an argument to the constructor.
        this.left = left;// the horizontal position of the car passed as an argument to the constructor.
        this.top = top;// the vertical position of the car passed as an argument to the constructor.
        this.width = width;// the width of the car element passed as an argument to the constructor.
        this.height = height;
        // the height of the car element passed as an argument to the constructor.
        this.directionX = 0;//- initially set to 0. It is used to specify the horizontal movement direction and can have the following values:
                            // 0: not moving horizontally
                            // 1: moving horizontally to the right
                            // -1: moving horizontally to the left
        this.directionY = 0;//- initially set to 0. It is used to specify the vertical movement direction and can have the following values:
                            // 0: not moving vertically
                            // 1: moving vertically down
                            // -1: moving vertically up
        
        this.element = document.createElement("img");
        this.element.src = imageURL;
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.element.style.position = "absolute";
        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 10) {
            this.left = 10;
        }
        if (this.top < 10) {
            this.top = 10;
        }
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }
        this.updatePosition();
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
            return true;
        } else {
            return false;
        }
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}