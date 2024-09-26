// pressing keys, creating a player, a game board

window.onload = function () {
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');

  let game;
  // .addEventListener() calls a function that waits for the click
  startButton.addEventListener('click', function () {
    startGame();
  });

  restartButton.addEventListener('click', function () {
    location.reload();
  });

  function startGame() {
    console.log('start game');

    game = new Game();

    game.start();
  }

  // Function that handles keydown (pressing a key) events
  function handleKeyDown(event) {
    const key = event.key;
    const possibleKeyStrokes = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
    ];

    // Check if the pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // .preventDefault() Prevents the default key actions from happening. In this case, it's scroll-up / scroll-down / scroll-left / scroll-right in the browser window.
      event.preventDefault();

      // Only when we have a game loaded, we can move the Player
      // O valor que coloquei -1 e 1 corresponde a pixeis e se eu quiser que o carro ande mais rápido aumento o valor do número.
      if (game) {
        switch (key) {
          case 'ArrowLeft':
            game.player.directionX = -1;
            break;
          case 'ArrowUp':
            game.player.directionY = -1;
            break;
          case 'ArrowRight':
            game.player.directionX = 1;
            break;
          case 'ArrowDown':
            game.player.directionY = 1;
            break;
        }
      }
    }
  }

  // Function that handles keyup (releasing the key) events

  function handleKeyUp(event) {
    const key = event.key;
    const possibleKeyStrokes = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
    ];

    // Check if the pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // .preventDefault() Prevents the default key actions from happening. In this case, it's scroll-up / scroll-down / scroll-left / scroll-right in the browser window.
      event.preventDefault();

      // Only when we have a game loaded, we can move the Player
      if (game) {
        switch (key) {
          case 'ArrowLeft':
            game.player.directionX = 0;
            break;
          case 'ArrowUp':
            game.player.directionY = 0;
            break;
          case 'ArrowRight':
            game.player.directionX = 0;
            break;
          case 'ArrowDown':
            game.player.directionY = 0;
            break;
        }
      }
    }
  }

  // Associate the handleKeyDown function with an Event Listener
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
};
