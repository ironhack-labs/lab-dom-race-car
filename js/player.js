class Player {
  constructor(gameScreen, left, top, width, height, imageUrl) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imageUrl;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    
    if(this.left < 10)
    {
      this.left = 10;
    }
    if(this.top < 10)
    {
      this.top = 10;
    }
    if(this.left > this.gameScreen.offsetWidth - this.width-10) {
      this.left = this.gameScreen.offsetWidth - this.width-10;
    }
    if(this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }

  didCollide(obstacle) {
    const playerAction = this.element.getBoundingClientRect();
    const obstacleAction = obstacle.element.getBoundingClientRect();
    
   if (
    playerAction.left < obstacleAction.right &&
    playerAction.right > obstacleAction.left &&
    playerAction.top < obstacleAction.bottom &&
    playerAction.bottom > obstacleAction.top
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
