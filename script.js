/*document.addEventListener("DOMContentLoaded", function () {
    startScreen();
});*/

const main = document.querySelector("main");

let currentPlayer = "player1";

let player1Score = 0;
let player2Score = 0;

let gameOver = false;

function startScreen() {
    main.innerHTML = "";

    let startScreen = document.createElement("div");
    startScreen.className = "startScreen";
    main.appendChild(startScreen);

    startScreen.innerHTML += `
    <div id="startScreenText">
        <h1>Welcome to the Connect Four Game!</h1>
    </div>
    <div id="startScreenButtons">
        <button id="startGameButton">Starta Spelet</button>
        <button id="resetScoreButton">Nollställ Poäng</button>
    </div>`;

    document.getElementById("startGameButton").addEventListener("click", function () {
        createGameBoard();
    });

    document.getElementById("resetScoreButton").addEventListener("click", function () {
        resetScore();
    });
}
startScreen();

function createGameBoard() {
    gameOver = false;
    main.innerHTML = "";
    currentPlayer = "player1"

    let gameScreen = document.createElement("div");
    gameScreen.className = "gameScreen";
    main.appendChild(gameScreen);

    let gameBoard = document.createElement("div");
    gameBoard.className = "gameBoard";
    gameScreen.appendChild(gameBoard)

    const rows = 6;
    const cols = 7;

    for (let row = 0; row < rows; row++) {
        gameBoard[row] = new Array(cols).fill(null);
        for (let col = 0; col < cols; col++) {
            let gameBoardCell = document.createElement("div");
            gameBoardCell.className = "gameBoardCell";

            gameBoardCell.dataset.col = col;
            gameBoardCell.dataset.row = row;

            gameBoard.appendChild(gameBoardCell);

            gameBoardCell.addEventListener("click", function (e) {
                playerAction(e.target);
            })
        }
    }

    let gameInfo = document.createElement("div");
    gameInfo.className = "gameInfo";
    gameScreen.appendChild(gameInfo);

    gameInfo.innerHTML += `
    <div class="gameInfoActions" id="gameInfoQuit" title="Return to Start Menu"><img src="assets/close.png"></div>
    <div class="gameInfoActions" id="gameInfoRestart" title="Restart Game"><img src="assets/restart.png"></div>
    <div id="gameInfoCurrentAction">${currentPlayer.slice(0, 6)} ${currentPlayer.slice(6)}'s turn</div>
    `;

    document.getElementById("gameInfoQuit").addEventListener("click", function () {
        startScreen();
    });

    document.getElementById("gameInfoRestart").addEventListener("click", function () {
        createGameBoard();
    });
}

function updateGameInfo(action) {
    if (action == "update player") {
        document.getElementById("gameInfoCurrentAction").innerHTML = `${currentPlayer.slice(0, 6)} ${currentPlayer.slice(6)}'s turn`;
    }
}
// updateGameInfo("update player")

function playerAction(cell) {
    if (gameOver) return;

    const col = Number(cell.dataset.col);

    const columnCells = document.querySelectorAll(`.gameBoardCell[data-col="${col}"]`)

    console.log("Clicked on column: ", cell.dataset.col, ", ", "row: ", cell.dataset.row);

    for (let rowInColumn = columnCells.length - 1; rowInColumn >= 0; rowInColumn--) {
        if (!columnCells[rowInColumn].classList.contains("player1Disc") && !columnCells[rowInColumn].classList.contains("player2Disc")) {
            columnCells[rowInColumn].classList.add(`${currentPlayer}Disc`);

            checkForWin(columnCells[rowInColumn].dataset.row, columnCells[rowInColumn].dataset.col);

            // kolla för vinnare här


            if (currentPlayer === "player1") {
                currentPlayer = "player2";
            } else {
                currentPlayer = "player1";
            }
            // uppdatera fältet för vems tur det är i hörnet här
            updateGameInfo("update player");
            return;
        }
    }
    document.getElementById("gameInfoCurrentAction").innerHTML = `${currentPlayer.slice(0, 6)} ${currentPlayer.slice(6)}'s turn` + "<br>the Column is full";
}

function checkForWin(row, col) {
    row = Number(row);
    col = Number(col);

    function getCell(row, col) {
        if (row >= 0 && row < 6 && col >= 0 && col < 7) {
            return document.querySelector(`.gameBoardCell[data-col="${col}"][data-row="${row}"]`);
        }
        return null;
    }

    function checkDirection(rowIncrement, colIncrement) {
        let count = 1;

        for (let i = 1; i < 4; i++) {
            const nextRow = row + i * rowIncrement;
            const nextCol = col + i * colIncrement;
            const cell = getCell(nextRow, nextCol);
            if (cell && cell.classList.contains(`${currentPlayer}Disc`)
            ) {
                count++;
            } else {
                break;
            }
        }
        for (let i = 1; i < 4; i++) {
            const nextRow = row - i * rowIncrement;
            const nextCol = col - i * colIncrement;
            const cell = getCell(nextRow, nextCol);
            if (cell && cell.classList.contains(`${currentPlayer}Disc`)) {
                count++;
            } else {
                break;
            }
        }
        return count >= 4;
    }

    if (
        checkDirection(0, 1) ||
        checkDirection(1, 0) ||
        checkDirection(1, 1) ||
        checkDirection(1, -1)
    ) {
        endGame();
    }
}

function updatePlayerScore() {
    document.getElementById("player1Score").innerHTML = player1Score;
    document.getElementById("player2Score").innerHTML = player2Score;
}

function endGame() {
    gameOver = true;
    if (currentPlayer === "player1") {
        player1Score++;

    } else {
        player2Score++;
    }
    updatePlayerScore();

    setTimeout(() => {
        if (confirm(`${currentPlayer} vann! Spela igen?`)) {
            createGameBoard();
        } else {
            startScreen();
        }
    }, 100); // Lite fördröjning för att spelaren ska se sista draget
}

function resetScore() {
    player1Score = 0;
    player2Score = 0;
    updatePlayerScore();
}







// let main = document.querySelector("main");
// let scoreDiv = document.getElementById("score");
// let player1Score = 0;
// let player2Score = 0;
/*
function startScreen() {
    main.innerHTML = '';
    main.className = "startScreen";

    const startScreenH1 = document.createElement("h1");
    startScreenH1.textContent = "Fyra i rad";
    startScreenH1.className = "startScreenH1";
    main.appendChild(startScreenH1);


    main.innerHTML += `<div id="startScreenButtons"><button id="startGameButton">Starta Spelet</button> <button id="resetScoreButton">Nollställ poäng</button></div>`

    document.getElementById("startGameButton").addEventListener("click", function () {
        startGame();
    });
    document.getElementById("resetScoreButton").addEventListener("click", function () {
        resetScore();
    });
}*/
/*
function startGame() {
    main.innerHTML = `
    <div class="player1Info">Player 1</div>
    <div class="gameInfo"><div class="gameBoard"></div></div>
    <div class="player2Info">Player 2</div>`;
    main.className = 'gameActiveScreen';

    let gameBoard = document.querySelector(".gameBoard")
    let player1Info = document.querySelector(".playerOneInfo");
    let player2Info = document.querySelector(".playerTwoInfo");

    for (let i = 0; i < 42; i++) {
        let square = document.createElement("div");
        square.className = "square";
        square.id = `square${i}`;
        gameBoard.appendChild(square);

        square.addEventListener("click", function () {
            playerAction(square);
        })
    }

    for (let i = 1; i <= 2; i++) {
        let playerInfo = document.querySelector(`.player${i}Info`);
        let playerScore = document.createElement("p");
        playerScore.textContent = "Poäng: " + 0;
        playerInfo.appendChild(playerScore);
    }
}

function playerAction(element) {
    let round = 1;
    let player1Turn = true;
    let player2Turn = true;

    console.log(element);
}

function gameEnd() { }

function resetScore() { }

function updateScore() { }

*/