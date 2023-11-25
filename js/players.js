class Player {
  constructor(gameScreen, left, top, width, height,imgSrc){
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement('img');
    this.element.src = imgSrc; 
    this.element.style.position = 'absolute';
    this.element.style.width = `${this.width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.height = `${this.height}px`;
    this.gameScreen.appendChild(this.element);

  


  }

  move(){
    this.left += this.directionX;
    this.top += this.directionY;

  if(this.left > this.gameScreen.offsetWidth - this.width){
    this.left = this.gameScreen.offsetWidth - this.width;
  }


  if(this.top > this.gameScreen.offsetHeight- this.height){
    this.top = this.gameScreen.offsetHeight - this.height;
  }
  this.updatePosition();
  }

  updatePosition(){
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle){
    let playerRect = this.element.getBoundingClientRect();
    let obstacleRect = this.element.getBoundingClientRect();

    if(playerRect.left < obstacleRect.right && 
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
      )
      {
        return true;
      }else {
        return false; 
      }

    
  }

  
}