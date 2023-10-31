class Player{
    constructor (gameScreen, left, top, width, height, imageSrc){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.x = 0
        this.y = 0
        this.image = document.createElement("img")
        this.image.src = imageSrc
        this.image.style.position = "absolute"
        this.image.style.left = `${left}px`
        this.image.style.top = `${top}px`
        this.image.style.width = `${width}px`
        this.image.style.height = `${height}px`

        this.gameScreen.appendChild(this.image)
    }

    move(){
        this.left += this.x;
        this.top += this.y
        if (this.left < 10) {
            this.left = 10;
          }
          if (this.top < 10) {
            this.top = 10;
          }
        if (this.left >= this.gameScreen.offsetWidth - this.width - 10){
            this.left = this.gameScreen.offsetWidth - this.width - 10
            }
        if (this.top >= this.gameScreen.offsetHeight - this.height - 10){
            this.top = this.gameScreen.offsetHeight - this.height - 10
            }
        this.updatePosition()
    }

    updatePosition(){
        this.image.style.left = `${this.left}px`
        this.image.style.top = `${this.top}px`
    }

    didCollide(obstacle) {
        const playerRect = this.image.getBoundingClientRect();
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
