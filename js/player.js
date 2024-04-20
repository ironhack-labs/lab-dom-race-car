class Player {
    constructor() {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.heigth = heigth
        this.directionX = 0
        this.DirectionY = 0

        this.element = document.createElement(`img`)
        this.element.scr = imgSrc
        this.element.style.position = `absolute`


    }
}