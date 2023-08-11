class Player
{
    constructor(gameScreen, left, top, width, height, image)
    {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.src = image;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move()
    {
        this.left += this.directionX;
        this.top += this.directionY;

        if(this.left < 10) return this.left = 10;
        if(this.top < 10) return this.top = 10;

        if(this.left > this.gameScreen.offsetWidth - this.width - 10)
        {
            this.left = this.gameScreen.offsetWidth - this.width - 10
        }

        if(this.top > this.gameScreen.offsetHeight - this.height - 10)
        {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }
        
        this.updatePosition();
    }

    updatePosition()
    {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacles)
    {
        const obstaclePosition = obstacles.element.getBoundingClientRect();
        const playerPosition = this.element.getBoundingClientRect();

        if(playerPosition.left < obstaclePosition.right &&
        playerPosition.right > obstaclePosition.left &&
        playerPosition.top < obstaclePosition.bottom &&
        playerPosition.bottom > obstaclePosition.top)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}