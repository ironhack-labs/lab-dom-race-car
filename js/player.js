class Player{
    constructor (gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left       = left;
        this.top        = top;
        this.width      = width;
        this.height     = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element    = document.createElement("img");

        this.element.style.left     = `${left}px`;
        this.element.style.top      = `${top}px`;
        this.element.style.width    = `${width}px`;
        this.element.style.height   = `${height}px`;
        this.element.src            = imgSrc; 
        this.element.style.position = "absolute";
        
        this.gameScreen.appendChild(this.element);
    }

    move(){
        //Move the player car position values within the screen        
        let newLeft = this.left + this.directionX;
        let newTop  = this.top  + this.directionY;

        if ((newLeft <= 368) && (newLeft >= 50)){
            this.left = newLeft;
        }
        if ((newTop <= 510) && (newTop >= 0)){
            this.top = newTop;
        }
        this.updatePosition();
    }

    updatePosition(){
        //Update the player car position on the screen
        this.element.style.left     = `${this.left}px`;
        this.element.style.top      = `${this.top}px`;
    }

    didCollide(obstacle){
        const playerRect    = this.element.getBoundingClientRect();
        const obstacleRect  = obstacle.element.getBoundingClientRect();

        //Check collision
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