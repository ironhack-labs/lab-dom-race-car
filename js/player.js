class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 60;
    this.height = 120;
    this.left = this.gameScreen.clientWidth / 2 - this.width / 2;
    this.top = this.gameScreen.clientHeight - this.height - 70;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 5;

    this.element = document.createElement("img");
    this.element.src = './images/car.png';

    // Set up the default element's property values
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.position = "absolute";

    this.gameScreen.appendChild(this.element);
  }

  render() {
    this.move();
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    if (this.left >= 60 && this.left <= this.gameScreen.clientWidth - this.width - 60)
      this.left += this.directionX;
    else if (this.left < 60)
      this.left = 60;
    else if (this.left > this.gameScreen.clientWidth - this.width - 60)
      this.left = this.gameScreen.clientWidth - this.width - 60;

    if (this.top >= 0 && this.top <= this.gameScreen.clientHeight - this.height)
      this.top += this.directionY;
    else if (this.top < 0)
      this.top = 0;
    else if (this.top > this.gameScreen.clientHeight - this.height)
      this.top = this.gameScreen.clientHeight - this.height;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
    return playerRect.left < obstacleRect.right && playerRect.right > obstacleRect.left && playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
  }
}