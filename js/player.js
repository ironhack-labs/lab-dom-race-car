class Player {
    constructor(gameScreen,left,top,width,height,imgSrc){
        this.gameScreen = gameScreen;
        // horizontal position of the player (via position absolute)
        this.left = left;
        // vertical position of the player (via position absolute)
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        // Create img tag for the player, define src and default styling
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        // set up default element's properties
        this.element.style.width=`${width}px`;
        this.element.style.height=`${height}px`;
        this.element.style.left=`${left}px`;
        this.element.style.top=`${top}px`;
        // Append player to the game screen
        this.gameScreen.appendChild(this.element);
    }
    
    move(){
        // update player's car position
        this.left+=this.directionX;
        this.top+=this.directionY;

        // ensure the player's car stays inside the gamescreen
        // handle left and right borders ".offSetWidth"
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
        } else if (this.left < 0) {
            this.left = 0;
        }

        // handle top and bottom
        if (this.top + this.height > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - this.height;
        } else if (this.top < 0) {
            this.top = 0;
        }
        this.updatePosition();
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didColide(obstacle){
        // .getBoudingClientRect() return info about top, left, right, bottom, width, height about a HTML element
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (playerRect.left < obstacleRect.right && playerRect.right > obstacleRect.left && playerRect.top < obstacleRect.bottom && playerRect.bottom > obstacleRect.top) {
            return true;
        } else {
            return false;
        }
    }
}

