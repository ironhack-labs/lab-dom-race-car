class Obstacle extends Component {
    constructor(gameScreen) {
        let left = Math.floor(Math.random() * 300 + 70) // TODO understand why *300+70
        let imgSrc = "./images/redCar.png";
        super(gameScreen,
            left,
            0,
            100,// width of obstacle car
            150,
            imgSrc)// height of obstacle car
    }
    move() {
        this.top += 3;
        this.updatePosition();
    }
}