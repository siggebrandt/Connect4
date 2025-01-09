/*document.addEventListener("DOMContentLoaded", function () {
    startScreen();
});*/

let main = document.querySelector("main");

let currentPlayer = "player1";

let player1Score = 0;
let player2Score = 0;

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

    let gameScreen = document.createElement("div");
    gameScreen.className = "gameScreen";
    main.appendChild(gameScreen);

    let gameBoard = document.createElement("div");
    gameBoard.className = "gameBoard";
    gameScreen.appendChild(gameBoard)

    const rows = 6;
    const cols = 7;

    for (let row = 0; row < rows; row++) {
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

    // for (let i = 0; i < rows * cols; i++) {
    //     let gameBoardCell = document.createElement("div");
    //     gameBoardCell.className = "gameBoardCell";

    //     gameBoardCell.dataset.col = i % cols;
    //     gameBoard.appendChild(gameBoardCell);

    //     gameBoardCell.addEventListener("click", function () {
    //         playerAction(gameBoardCell.dataset.col);
    //     })
    // }

    let gameInfo = document.createElement("div");
    gameInfo.className = "gameInfo";
    gameScreen.appendChild(gameInfo);

    gameInfo.innerHTML += `
    <div class="gameInfoActions" id="gameInfoQuit" title="Return to Start Menu"><img src="assets/close.png"></div>
    <div class="gameInfoActions" id="gameInfoRestart" title="Restart Game"><img src="assets/restart.png"></div>
    <div id="gameInfoCurrentAction">Current Action</div>
    `;

    document.getElementById("gameInfoQuit").addEventListener("click", function () {
        startScreen();
    });

    document.getElementById("gameInfoRestart").addEventListener("click", function () {
        createGameBoard();
    });
}

function playerAction(cell) {
    const col = cell.dataset.col;
    const columnCells = document.querySelectorAll(`.gameBoardCell[data-col="${col}"]`)

    console.log("Clicked on column: ", cell.dataset.col, ", ", "row: ", cell.dataset.row);

    for (let i = columnCells.length - 1; i >= 0; i--) {
        if (!columnCells[i].classList.contains("player1Disc") && !columnCells[i].classList.contains("player2Disc")) {
            columnCells[i].classList.add(`${currentPlayer}Disc`);

            // kolla för vinnare och uppdatera fältet för vems tur det är i hörnet


            if (currentPlayer === "player1") {
                currentPlayer = "player2";
            } else {
                currentPlayer = "player1";
            }

            return;
        }
    }

    console.log("column is full");
}

function checkForWin() { }

function endGame() { }

function resetScore() { }



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