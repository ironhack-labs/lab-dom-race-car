class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;

        // horizontal position of the player (via position absolute)
        this.left = left;

        // vertical position of the player (via position absolute)
        this.top = top;

        // width of the player
        this.width = width;

        // height of the player
        this.height = height;

        // direction of the player's moving horizontally
        this.directionX = 0;

        // direction of the player's moving vertically
        this.directionY = 0;

        // create the image tag for the player, define src and do default styling
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";

        // set up default element's properties
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        // Append player to the game screen
        this.gameScreen.appendChild(this.element);
    }

    // car move
    move() {
        //update player's car position based on directionX and direction Y
        this.left += this.directionX;
        this.top += this.directionY;

        // ensure the player's car stays inside the game's screen

        // handle left and right borders
        // .offSetWidth() returns the width of an element in data tyoe number

        // right side
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
        }
        // left side
        else if (this.left < 0) {
            this.left = 0;
        }

        // handle top and bottom borders

        // bottom
        if (this.top + this.height > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - this.height;
        }
        else if (this.top < 0) {
            this.top = 0;
        }

        this.updatePosition();
    }

    // update the position of the car in the css
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        // .getBoundingClientRect() gives info about top, left, right, bottom, width, height
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (playerRect.left < obstacleRect.right && playerRect.right > obstacleRect.left && playerRect.top < obstacleRect.bottom && playerRect.bottom > obstacle.top) {
            return true;
        }
        else {
            return false;
        }
    }
}