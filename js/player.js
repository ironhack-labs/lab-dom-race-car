class Player {
    constructor(gameScreen, top, left) {
        this.gameScreen = gameScreen;
        this.top = top;
        this.left = left;
        this.width = 100;
        this.height = 170;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img');
        this.element.src = "../images/car.png";
        this.element.style.position = 'absolute';
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        this.element.style.top = this.top + 'px';
        this.element.style.left = this.left + 'px';
        this.gameScreen.appendChild(this.element);
    }
move() {
    // Keeps the car from getting stuck left
    if (this.left >= 40) {
    this.left += this.directionX;
    } else {
    this.left = 40;
    }
    // Keeps the car from getting stuck right
    if (this.left + this.width <= 360) {
    this.left += this.directionX;
    } else {
    this.left = 360 - this.width;
    }
    // Keeps the car from getting stuck top
    if (this.top >= 0 ) {
        this.top += this.directionY;
    } else {
        this.top = 0;
    }
    // Keeps the car from getting stuck bottom
    if (this.top + this.height <= 540) {
        this.top += this.directionY;
    } else {
    this.top = 540 - this.height;
    } 
    this.update();
}
update() {
this.element.style.top = this.top + 'px';
this.element.style.left = this.left + 'px';
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
