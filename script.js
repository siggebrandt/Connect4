document.addEventListener("DOMContentLoaded", function () {
    startScreen();
});

let main = document.querySelector("main");

function startScreen() {
    main.innerHTML = '';
    const startScreenH1 = document.createElement("h1");
    startScreenH1.textContent = "Fyra i rad";
    startScreenH1.className = "startScreenH1";
    main.appendChild(startScreenH1);

    main.classList.add("startScreen");
    main.innerHTML += `<div id="startScreenButtons"><button id="startGameButton">Starta Spelet</button> <button id="">Nollställ poäng</button></div>`
}

function startGame() { }

function playerAction() { }

function gameEnd() { }

function resetScore() { }