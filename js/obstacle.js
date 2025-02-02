class Obstacle extends Component{
    constructor(gameScren) {
        super(
            gameScren, 
            Math.round(Math.random) * 300 + 70,
            0,
            100,
            150,
            './images/redCar.png'
        );
    }

    move() {
        this.top += 3;
        this.updatePosition();
    }
}