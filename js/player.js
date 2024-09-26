class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        if(this.left < 30) {
            this.left = 30;
        } 
        
        if(this.left + this.width > this.gameScreen.offsetWidth - 30) {
            this.left = this.gameScreen.offsetWidth - 30 - this.width;
        }
        
        if(this.top < 0) {
            this.top = 0;
        }

        if(this.top + this.height > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - this.height;
        }
    }

    didCollide(obstacle) {
        if(
            this.left < obstacle.left + obstacle.width &&
            this.left + this.width > obstacle.left &&
            this.top < obstacle.top + obstacle.height &&
            this.top + this.height > obstacle.top
        ) {
            console.log("collision");
            return true;
            
        } else {
            console.log("passed car")
            return false;
        }
    }

}