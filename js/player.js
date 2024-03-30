class Player{
    constructor(gameScreen, left , top, width, height) {
this.gameScreen = gameScreen;
this.left = left;
this.top = top;
this.width = width;
this.height = height;
this.directionX = 0;
this.directionY = 0;
this.element = document.createElement('img');
this.element.src = image;
this.element.style.position = 'absolute';
this.element.style.width = '${this.width}px';
this.element.style.height = '${this.height}px';
this.element.style.top = '${this.top}px';
this.element.style.left = '${this.left}px';
this.gameScreen.appendChild(this.element);
    }
    move(){
        if (this.left >= 50 && this.left + this.width <=450) {
        this.left += this.directionX;
        this.top += this.directionY;
        this.updatePosition();
        }
    }   
    updatePosition(){
        this.element.style.top = '${this.top}px';
        this.element.style.left = '${this.left}px';
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
    }