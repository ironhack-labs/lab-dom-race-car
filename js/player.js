class Player {
    constructor(gameScreen , left, top, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.imgSrc = imgSrc;
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";

        // Set some defalt values
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
    }

    move(){
        // Update playes car position based on direction;
        this.top += this.directionY;
        this.left += this.directionX;
        // Right side 
        if(this.left + this.width >= this.gameScreen.offsetWidth){ //offSetWidth is part of javascript 
            this.left = this.gameScreen.offsetWidth - this.width;
        } // Left side 
        else if(this.left <= 0){
            this.left = 0;
        }
        //Bottom
        if(this.top + this.height > this.gameScreen.offsetHeight){
            this.top = this.gameScreen.offsetHeight - this.height;
        } // Top 
        else if(this.top <= 0){
            this.top = 0;
        }
        this.updatePosition()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if(playerRect.left < obstacleRect.right && 
            playerRect.right > obstacleRect.left && 
            playerRect.top < obstacleRect.bottom && 
            playerRect.bottom > obstacleRect.top){
            return true
        } else {
            return false
        }
    }
}
