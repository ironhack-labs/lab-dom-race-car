/*window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    //invoking a new instance of the Game class and start the game by invoking the start()method
    game = new Game();
    game.start()
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystorkes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeystorkes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "Arrowup":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionY = 1;
          break;
        case "Arrowdown":
          game.player.directionY = 1;
          break;

      }
    }
  }
  window.addEventListener("keydown", handleKeydown);

  restartButton.addEventListener("click", function() {
    restartGame();
  });
   function restartGame(){
    location.reload();
   }
};*/
// script.js
let game = null; // make it global so handlers can see it

window.addEventListener("load", () => {
  const startBtn   = document.getElementById("start-button");
  const restartBtn = document.getElementById("restart-button");

  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", () => location.reload());

  // Keyboard controls
  window.addEventListener("keydown", onKeyDown, { passive: false });
  window.addEventListener("keyup", onKeyUp, { passive: true });
  

  // OPTIONAL: wire up on-screen buttons if you have them
  wireButtons(); // safe if buttons don’t exist
});

function startGame() {
  // Hide intro / show game if needed
  const intro = document.getElementById("game-intro");
  const screen = document.getElementById("game-screen");
  if (intro) intro.style.display = "none";
  if (screen) screen.style.display = "block";

  game = new Game();
  game.start();
}

function onKeyDown(e) {
  if (!game || game.gameOver) return;

  window.addEventListener("keydown", function(e) {
  const k = e.key;
  if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(k)) {e.preventDefault();}

  if (k === "ArrowLeft")  game.player.directionX = -1;
  if (k === "ArrowRight") game.player.directionX =  1;
  if (k === "ArrowUp")    game.player.directionY = -1;
  if (k === "ArrowDown")  game.player.directionY =  1;
});
}

function onKeyUp(e) {
  if (!game || game.gameOver) return;

  const k = e.key;
  if (k === "ArrowLeft" || k === "ArrowRight") game.player.directionX = 0;
  if (k === "ArrowUp"   || k === "ArrowDown")  game.player.directionY = 0;
}

// ========== OPTIONAL: on-screen arrow buttons ==========
function wireButtons() {
  const map = [
    ["btn-left",  -1,  0],
    ["btn-right",  1,  0],
    ["btn-up",     0, -1],
    ["btn-down",   0,  1],
  ];

  const press = (dx, dy) => { if (game && !game.gameOver) { game.player.directionX = dx; game.player.directionY = dy; } };
  const release = () => { if (game && !game.gameOver) { game.player.directionX = 0; game.player.directionY = 0; } };

  map.forEach(([id, dx, dy]) => {
    const el = document.getElementById(id);
    if (!el) return; // safely skip if you don't have the buttons
    ["mousedown","touchstart"].forEach(t => el.addEventListener(t, e => { e.preventDefault(); press(dx, dy); }, { passive: false }));
    ["mouseup","mouseleave","touchend","touchcancel"].forEach(t => el.addEventListener(t, e => { e.preventDefault(); release(); }, { passive: false }));
  });
}
