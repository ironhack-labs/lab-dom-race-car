class Player {
    constructor() {
        this.gameScreen = game.gameScreen

        this.left = left
        this.top = top

        this.width = width
        this.height = height

        this.directionX = 0
        this.directionY = 0

        this.playerElement = document.createElement('img')
        this.playerElement.src = `./images/car.png`
        this.playerElement.style.position = 'absolute'

        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.playerElement)

    }

    move() {
        this.directionX = this.left
        this.directionY = this.top

        this.left = game.gameScreen.left
        this.top = game.gameScreen.top
    }

    updatePosition() {

    }

    didCollide(obstacle) {

    }


}
//
