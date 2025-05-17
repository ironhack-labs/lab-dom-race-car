class Player {
  constructor(gameScreen, left, top, height, width) {
    this.gameScreen = gameScreen
    this.left = left
    this.top = top
    this.width = width
    this.height = height
    this.directionX = 0
    this.directionY = 0
    this.element = document.createElement("img")

    this.element.src = "../images/car.png"
    this.element.style.width = this.width + "px"
    this.element.style.height = this.height + "px"
    this.element.style.position = "absolute"
    this.element.style.left = this.left + "px"
    this.element.style.top = this.top + "px"

    this.gameScreen.appendChild(this.element)
  }

  move() {
    if (this.top < 50) {
      this.top = 50
    }
    if (this.top > 550) {
      this.top = 550
    }

    if (this.left > 400) {
      this.left = 400
    }
    if (this.left < 50) {
      this.left = 50
    }
    this.top += this.directionY
    this.left += this.directionX
    this.updatePosition()
  }

  updatePosition() {
    this.element.style.left = this.left + "px"
    this.element.style.top = this.top + "px"
  }

  didCollide(obstacle) {}
}