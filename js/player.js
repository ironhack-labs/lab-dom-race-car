class Player{
   constructor(gameScreen, left, top, width, height, imgSrc){
     this.gameScreen= gameScreen

     // horizontal position of the player  (via position absolute)
     this.left = left
     //vertical position of the player  (via position absolute)
     this.top = top
     //width of player
     this.width = width
     //height of player
     this.height = height
     //create img tag for player, define source src and do default
     this.element = document.createElement('img')
     this.element.src = imgSrc;
     this.element.style.position = 'absolute';

     //direction of the player's moving horizontally
     this.directionX = 0
     //direction of the player's moving vertically
     this.directionY = 0

     this.element.style.width = `${width}px`
     this.element.style.height = `${height}px`
     this.element.style.left = `${left}px`
     this.element.style.top = `${top}px`

     //Append Player to game screen

     this.gameScreen.appendChild(this.element);
   }

   move(){
    //update player car movement based on direction x and y

    this.left += this.directionX
    this.top +=this.directionY

    //ensure the car staying inside the game screen

    // handle left and right
    //.offSetWidth() return the width of elment 

    //right side

    if(this.left + this.width > this.gameScreen.offsetWidth){
        this.left = this.gameScreen.offsetWidth - this.width;
    }else if (this.left  < 0){
        this.left = 0
    }

    //top and bottom

    if(this.top + this.height > this.gameScreen.offsetHeight){
        this.top = this.gameScreen.offsetHeight - this.height;

    }else if (this.top < 0){
        this.top = 0;
     

  
    }
    this.updatePosition();
   }

   updatePosition() {
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
   }

   didCollide(obstacle){
    // .getBoundingClientRect() returns info abotut top, left, right, bottom, width, height about a Html ELEMENT
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if(playerRect.left < obstacleRect.right
       && playerRect.right > obstacle.left &&
       playerRect.top < obstacleRect.bottom && 
       playerRect.bottom > obstacleRect.top){
         return true;
       } else {
        return false;
       }
    
   }
} 