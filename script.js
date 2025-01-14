/*document.addEventListener("DOMContentLoaded", function () {
    startScreen();
});*/

let main = document.querySelector("main");

let currentPlayer = "player1";

let player1Score = 0;
let player2Score = 0;

let gameBoard = [];

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
    main.innerHTML = "";
    currentPlayer = "player1"
    gameBoard = [];

    let gameScreen = document.createElement("div");
    gameScreen.className = "gameScreen";
    main.appendChild(gameScreen);

    let gameBoardDiv = document.createElement("div");
    gameBoardDiv.className = "gameBoard";
    gameScreen.appendChild(gameBoardDiv)

    const rows = 6;
    const cols = 7;

    for (let row = 0; row < rows; row++) {
        gameBoard[row] = new Array(cols).fill(null);
        for (let col = 0; col < cols; col++) {
            let gameBoardCell = document.createElement("div");
            gameBoardCell.className = "gameBoardCell";

            gameBoardCell.dataset.col = col;
            gameBoardCell.dataset.row = row;

            gameBoardDiv.appendChild(gameBoardCell);

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
    const col = Number(cell.dataset.col);
    console.log(gameBoard);

    const columnCells = document.querySelectorAll(`.gameBoardCell[data-col="${col}"]`)

    console.log("Clicked on column: ", cell.dataset.col, ", ", "row: ", cell.dataset.row);

    for (let rowInColumn = columnCells.length - 1; rowInColumn >= 0; rowInColumn--) {
        if (!columnCells[rowInColumn].classList.contains("player1Disc") && !columnCells[rowInColumn].classList.contains("player2Disc")) {
            columnCells[rowInColumn].classList.add(`${currentPlayer}Disc`);
            if (checkForWin(cell.dataset.row, cell.dataset.col)) {
                endGame();
                return;
            };

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

    let horizontalCount = 1;

    // måste kolla horisontiellt, vertikalt, diagonalt 2 olika riktiningar

}

function endGame() {
    // kallas på när checkforWIn är true
}

function resetScore() {
    //nollställ poäng bara, kanske inte äns behövs helt ärligt
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