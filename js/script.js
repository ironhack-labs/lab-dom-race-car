class PageHandler{
  constructor(pages){
    this.pages = pages;
    this.currentPage = this.pages.next();
  }

  changePages(){
    this.currentPage.style.display = "none";
    this.showNextPage();
  }

  showNextPage() {
    this.currentPage = this.pages.next();
    this.currentPage.style.display = "block";
  }
}

function lowercaseFirstLetter(word) {
  return word.charAt(0).toLowerCase() + word.slice(1);
}

function getInputMessage() {
  const userInput = prompt("Enter your message:");
  if (userInput !== null) {
      return userInput;
  }
}

const {
  gameIntro = "game-intro",
  gameScreen = "game-screen",
  gameEnd = "game-end",
} = {};

let pageHandler;
let gameHandler;



document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const gameIntroElement = document.getElementById(gameIntro);
  const gameScreenElement = document.getElementById(gameScreen);
  const gameEndElement= document.getElementById(gameEnd);

  pageHandler = new PageHandler([gameIntroElement, gameScreenElement, gameEndElement]);
  gameHandler = new GameHandler(gameScreenElement);
  
  startButton.addEventListener("click", function () {
    pageHandler.changePages();
    gameHandler.awake();
    gameHandler.start();
  });

  restartButton.addEventListener("click", function () {
    pageHandler.changePages();
    gameHandler.awake();
  });

  document.addEventListener("keydown", function(event) {
    const propertyName = lowercaseFirstLetter(event.key);
    if(propertyName){
      gameHandler[propertyName] = true;
    }

    if(propertyName===("escape")) {
      gameHandler.stop();
      if(getInputMessage() === ("Optimus Prime Rocks")){
          gameHandler.changePlayer();
      }
      gameHandler.start();
    }

    if(propertyName===("s")) {
      gameHandler.createFireBall();
    }
  });

  document.addEventListener("keyup", function(event) {
    const propertyName = lowercaseFirstLetter(event.key);
    if(propertyName){
      gameHandler[propertyName] = false;
    }
  });
  
});
