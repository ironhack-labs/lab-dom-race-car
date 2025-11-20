class Obstacle extends Component {
    constructor(gameScreen) {
      const width = 100;
      const height = 150;
      const left = Math.floor(Math.random() * (gameScreen.clientWidth - width));
      const top = 0;
      const imgSrc = 'images/red-car.png'; // replace with your image path
      super(gameScreen, left, top, width, height, imgSrc);
      this.speed = 3;
    }
  
    move() {
      this.top += this.speed;
      this.updatePosition();
    }
  }
  