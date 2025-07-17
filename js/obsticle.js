class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 100;
    this.height = 150;
    this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - this.width));
    this.top = 0;

    this.element = document.createElement('img');
    this.element.src = './images/redCar.png';
    this.element.classList.add('obstacle');
    this.element.style.position = 'absolute';
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.element);


  }
    move(){
      this.top= this.top + 5; // Move the obstacle down by 5 pixels
        this.updatePosition()
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

    }
}