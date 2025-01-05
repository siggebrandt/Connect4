document.addEventListener("DOMContentLoaded", function () {
    startScreen();
});

let main = document.querySelector("main");
let scoreDiv = document.getElementById("score");

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
}

function startGame() {
    main.innerHTML = `
    <div class="player1Info">Player 1</div>
    <div class="gameBoard"></div>
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
        //playerInfo.innerHTML += `<button id="player${i}TurnButton">Ta tur</button>`;
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

