class Game {
  // The constructor will create an object via class and it will store all the properties that belong to the future object
  constructor() {
    // Get all the possible screens
    // game-screen and game-end are initially hidden
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    // Player
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );

    // Style for the game board
    this.width = 500;
    this.height = 600;

    // Obstacles
    this.obstacles = [];

    // Score
    this.score = 0;

    // Lives
    this.lives = 3;

    // gameOver flag
    this.gameIsOver = false;
  }

  // Start the game
  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide de start screen and display the same screen
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    // Start the Game Loop
    this.gameLoop();
  }

  // Creating an animation function
  gameLoop() {
    console.log("Game Loop");

    // Check if the game is over to interrupt the game loop
    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.player.move()
  }
}
