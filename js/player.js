class Player {

    constructor( gameScreen, left, top, width, height, imgSrc ){
        this.gameScreen = gameScreen;   

        // horizontal position of the player (via position absolute)
        this.left = left;
        // vertical position of the player (via position absolute)
        this.top = top;
        // width of the player
        this.width = width;
        //  height of the player
        this.height = height;
        // direction of the player's moving horizontally
        this.directionX = 0;
        // direction of the player's moving vertically
        this.directionY = 0;
        // create the img tag fro the player, define src and default
        this.element = document.createElement('img');
        this.element.src = imgSrc;
        this.element.style.position = 'absolute';

        //  set up default element's properties
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;

        //append Player to the Game Screen
        this.gameScreen.appendChild(this.element);
    }

    move(){
        // Update player's car position based on directionX and directionY
        
        this.left +=this.directionX;
        this.top +=this.directionY;

        // ensure the player's car stays inside the game screen

        // handle left and right borders
        // .offSetWidth() returns the width of the element in data type number

        // Right Side 
        if(this.left + this.width > this.gameScreen.offsetWidth){
            this.left = this.gameScreen.offsetWidth - this.width;
        } 

        // Left side
        else if(this.left <0) {
            this.left = 0;
        }

        // handle top and bottom borders
        // bottom side
        if(this.top +this.height > this.gameScreen.offsetHeight){
            this.top = this.gameScreen.offsetHeight - this.height;
        
        // top side
        }
        else if (this.top < 0){
            this.top = 0;
        }

        this.updatePosition();

    }

    // Updates the Position of the car in the CSS

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle){
        // .getBoundinClientRect() return info about top, left, right, bottom, width, height of an html element

        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if(playerRect.left < obstacleRect.right &&
             playerRect.right>obstacleRect.left &&
             playerRect.top < obstacleRect.bottom &&
             playerRect.bottom > obstacleRect.top)
             {
                return true;
        }
        else {
            return false;
        }
    }
}