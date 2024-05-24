window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;

    startButton.addEventListener("click", function () {
        startGame();
    });

    function startGame() {
        game = new Game();
        game.start();
    }

    function handleKeyDown(event) {
        const key = event.key;
        const possibleKeystrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

        if (possibleKeystrokes.includes(key)) {
            switch (key) {
                case "ArrowLeft":
                    game.player.directionX = -4;
                    game.player.directionY = 0;
                    break;
                case "ArrowUp":
                    game.player.directionX = 0;
                    game.player.directionY = -4;
                    break;
                case "ArrowRight":
                    game.player.directionX = 4;
                    game.player.directionY = 0;
                    break;
                case "ArrowDown":
                    game.player.directionY = 4;
                    game.player.directionX = 0;
                    break;
                default:
                    game.player.directionX = 0;
                    game.player.directionY = 0;
                    return;
            }
            event.preventDefault();
        }
    }
    window.addEventListener("keydown", handleKeyDown);
};
