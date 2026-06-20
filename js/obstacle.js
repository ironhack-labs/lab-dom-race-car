class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.possibleXValues = [70, 230];
        this.top = -200;
        this.left = this.possibleXValues[Math.floor(Math.random() + this.possibleXValues.length)];
        this.width = 100;
        this.height = 170;
        this.element = document.createElement('img');
        this.element.src = "../images/redcar.png";
        this.element.style.position = 'absolute';
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        this.element.style.top = this.top + 'px';
        this.element.style.left = this.left + 'px';
        this.gameScreen.appendChild(this.element);
    }
move() {
    this.top += 2;
    this.update();
}
update() {
this.element.style.top = this.top + 'px';
}
}