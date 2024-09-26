class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;

        // Horizontal position of the player (via position absolute)
        this.left = left;

        // Vertical position of the player (via position absolute)
        this.top = top;

        // Width of player
        this.width = width;

        // Heigth of player
        this.height = height;

        // Direction of the player's moving horizontally
        this.directionX = 0;

        // Direction of the player's movin vertically
        this.directionY = 0;

        // Create the img tag for the player, define src and do default
        // styling
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";

        // Set up default element's properties
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        // Append Player to the Game Screen
        this.gameScreen.appendChild(this.element);
    }

    move() {
        // Update player's car position based on directionX
        // and directionY

        this.left += this.directionX;
        this.top += this.directionY;

        // Ensure the player's car stays inside the game
        // screen

        // handle left and right borders

        // offSetWidth() returns the width of and element
        // in data type number

        // Right side
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
            //Left side
        } else if (this.left < 0) {
            this.left = 0;
        }

        // handle top and bottom borders
        // Bottom Side

        if (this.top + this.height > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - this.height;
        } else if (this.top < 0) {
            this.top = 0;
        }

        this.updatePosition();
    }

    // Updates the Position of the car in the CSS
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        // .getBoundingClientRect() returns info about top, left,
        // right, buttom, width, height about a HTML Element

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
}
