class Obstacle extends Component {
  constructor(gameScreen) {
    const width = 100;
    const height = 150;
    const left = Math.floor(Math.random() * (gameScreen.clientWidth - width));

    super(gameScreen, left, 0, width, height, "./images/car-red.png");
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}