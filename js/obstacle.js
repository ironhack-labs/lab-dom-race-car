class Obstacle {
constructor ( gameScreen,){
  this.gameScreen = gameScreen;
  this.redCarPositions = [100, 300];
  this.left = this.redCarPositions[Math.floor(Math.random() * this.redCarPositions.length)];
  this.top = -300;
this.width = 100;
this.height = 200
this.element = document.createElement("img");
this.element.src = "../images/redCar.png";
this.element.style.position = "absolute";
this.element.style.width = `${this.width}px`;
this.element.style.height = `${this.height}px`;
this.element.style.left = `${this.left}px`;
this.element.style.top = `${this.top}px`;
this.gameScreen.appendChild(this.element)

}
move(){
this.top += 3
if(this.top > 600){
  this.top = -200;
}
this.updatePosition()

}
updatePosition(){
  this.element.style.top = `${this.top}px`

}
}
