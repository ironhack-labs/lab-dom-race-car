class Obstacle extends GameObject {
  constructor(src, width, height, top, left = 0) {
    super(src, width, height, top, left);
  }

  instantiateGameObject(gameScreen) {
    super.instantiateGameObject(gameScreen);
    this.element.style.left = Math.random() * (gameScreen.clientWidth) + "px";
  }
  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}
