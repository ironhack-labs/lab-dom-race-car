class Player {
    constructor(gameScreen, left, top, width, height, img) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.setAttribute("src", img);
        this.element.style.position = "absolute";
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
        this.gameScreen.appendChild(this.element);
    }
    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        this.updatePosition();
        const minLeft = 10;
        const minTop = 10;
        const maxLeft = this.gameScreen.offsetWidth - this.width - 10;
        const maxTop = this.gameScreen.offsetHeight - this.height - 10;

        if (this.left < minLeft) {
            this.left = minLeft;
          }
      
          if (this.top < minTop) {
            this.top = minTop;
          }
      
          if (this.left > maxLeft) {
            this.left = maxLeft;
          }
      
          if (this.top > maxTop) {
            this.top = maxTop;
          }
      
          //car.style.left = `${this.left}px`;
          //car.style.top = `${this.top}px`;
    }
    updatePosition() {
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
        
        
        }
     
    didCollide(obstacle) {
        const playerCar = this.element.getBoundingClientRect();
        const obstacleCar = obstacle.element.getBoundingClientRect();

        if(
            playerCar.left < obstacleCar.right && playerCar.right > obstacleCar.left && playerCar.top < obstacleCar.bottom && playerCar.bottom > obstacleCar.top)
            {
                return true;
            } else {
                return false;
            }
    }
}