class Player extends GameObject {
  constructor(src, width, height, top, left = 0) {
    super(src, width, height, top, left);
    this.xSpeed = 5;
    this.ySpeed = 5;
    this.xDirection = 1;
    this.yDirection = 1;
  }

  movePlayer(gameScreen, left, right, up, down) {
    const storedLeftValue = this.element.style.left;
    const storedTopValue = this.element.style.top;

    if (left || right) {
      this.xDirection = left ? -1 : 1;
      this.element.style.left =
        this.element.offsetLeft + this.xSpeed * this.xDirection + "px";

      if (!super.checkCollisions(gameScreen, this.element, this.element.width, this.element.height)) {
        this.element.style.left = storedLeftValue;
      }
    }

    if (up || down) {
      this.yDirection = up ? -1 : 1;
      this.element.style.top =
        this.element.offsetTop + this.ySpeed * this.yDirection + "px";
      if (!super.checkCollisions(gameScreen, this.element, this.element.width, this.element.height)) {
        this.element.style.top = storedTopValue;
      }
    }
  }
}


class FireBall extends GameObject{
  constructor(src, width, height, top, left = 0) {
    super(src, width, height, top, left);
  }
  
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top -= 3;
    this.updatePosition();
  }
}