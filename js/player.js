class Player{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left; // horizontal position of the player
        this.top = top; // vertical position of the player
        this.width = width; // width of the player
        this.height = height; // height of the player
        this.directionX = 0 // direction of the player moving horizontally
        this.directionY = 0 // direction of the player moving vertically

        // create img tag for the player, define src and default styling.
        this.element = document.createElement("img") ;
        this.element.src = imgSrc
        this.element.style.position = "absolute";

        // set up the default element's property

        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        // append player to the game screen
        this.gameScreen.appendChild(this.element)
    }

    move() {
        // Update player's car position based on directionX and directionY
        this.left += this.directionX;
        this.top += this.directionY;
    
        // Ensure the player's car stays within the game screen
    
        // handles right and left  side
        // offsetWidth returns the layout width as a number
        if (this.left + this.width > this.gameScreen.offsetWidth) {
          this.left = this.gameScreen.offsetWidth - this.width;
        }
        else if(this.left <= 0){
          this.left = 0;
        }
  
        // handles bottom and top side
        // offsetHeight returns the layout height as a number
        if (this.top + this.height > this.gameScreen.offsetHeight) {
          this.top = this.gameScreen.offsetHeight - this.height;
        }
        else if (this.top < 0) {
          this.top = 0; // top border
        }
    
        // Update the player's car position on the screen
        this.updatePosition();
      }
    
      updatePosition() {
        // Update CSS
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
      didCollide(obstacle) {
        // define it as a rectangle and give left, right, top and bottom properties
  
        //.getBoundingClientRect() returns info about top, left, right, bottom, width, height, x and y position of the HTML element
  
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
  
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          // to understand better the conditions, do
          // console.log(playerRect, obstacleRect);
          return true;
        } else {
          return false;
        }
      }
    }