class GameObject {
  constructor(src, width, height, top, left = 0) {
    this.element;
    this.src = src;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
  }

  checkCollisions(element1, element2, offSetX = 0, offSetY = 0) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
      rect1.left + offSetX < rect2.right &&
      rect1.right - offSetX> rect2.left &&
      rect1.top + offSetY < rect2.bottom &&
      rect1.bottom - offSetY > rect2.top
    );
  }

  instantiateGameObject(gameScreen) {
    const element = document.createElement("img");

    element.src = this.src;
    element.style.position = "absolute";
    element.style.width = this.width + "px";
    element.style.height = this.height + "px";
    element.style.top = gameScreen.clientHeight - this.height - this.top + "px";
    element.style.left =
      gameScreen.clientWidth / 2 - this.width / 2 - this.left + "px";

    gameScreen.appendChild(element);
    this.element = element;
  }

  removeObject() {
    this.element.remove(); 
  }
}
