class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 0;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");

    this.element.src = "./images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    // Actualiza la posición del obstáculo según las propiedades izquierda y superior
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Mueve el obstáculo hacia abajo 3px
    this.top += 3;
    // Actualiza la posición del obstáculo en la pantalla
    this.updatePosition();
  }
}
