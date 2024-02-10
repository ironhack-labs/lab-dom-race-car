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
    if(this.left<20)
    {
        this.left=20;
    }
    if(this.top<20)
    {
        this.top=20;
    }
    if(this.right<20)
    {
        this.right=20;
    }
    if(this.bottom<20)
    {
        this.bottom=20;
    }
    if(this.left>this.gameScreen.offSetWidth-this.width-20){
        this.left=this.gameScreen.offSetWidth-this.width-20;
    }
    if(this.top>this.gameScreen.offSetWidth-this.width-20){
        this.top=this.gameScreen.offSetWidth-this.width-20;
    }
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  didCollide(Obstacle) {
    const playerAction=this.element.getBoundingClientRect();
    const obstacleAction=this.element.getBoundingClientRect();
    
   if(playerAction.left<ObstacleAction.right && playerAction.right>ObstacleAction.left && 
    playerAction.top<ObstacleAction.bottom && playerAction.bottom>obstacleAction.top)
    {
        return true;
    }
    
  }
  else
  {
    return false;
  }
}

