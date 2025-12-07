const COLS = 12;
const ROWS = 10;
const GOLD_COUNT = 6;

let playerCol = 1;
let playerRow = 1;
let score = 0;

const GRID = document.querySelector("#grid");
const SCORE_DISPLAY = document.querySelector("#score span");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildGrid() {
    for (let c = 1; c <= COLS; c++) {
        for (let r = 1; r <= ROWS; r++) {

            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `cell_${c}_${r}`;

            cell.style.gridColumn = c;
            cell.style.gridRow = r;

            GRID.appendChild(cell);
        }
    }
}

function placeGold() {
    let existing = document.querySelectorAll(".gold").length;

    while (existing < GOLD_COUNT) {
        let col = random(1, COLS);
        let row = random(1, ROWS);
        let cell = document.getElementById(`cell_${col}_${row}`);

        if (!cell.classList.contains("gold")) {
            cell.classList.add("gold");
            existing++;
        }
    }
}

function drawPlayer() {
    const p = document.getElementById("player");
    p.style.gridColumn = playerCol;
    p.style.gridRow = playerRow;
}

function checkPickup() {
    const cell = document.getElementById(`cell_${playerCol}_${playerRow}`);

    if (cell.classList.contains("gold")) {
        cell.classList.remove("gold");
        score++;
        SCORE_DISPLAY.textContent = score;
    }
}

function movePlayer(dir) {

    if (dir === "up"    && playerRow > 1)    playerRow--;
    if (dir === "down"  && playerRow < ROWS) playerRow++;
    if (dir === "left"  && playerCol > 1)    playerCol--;
    if (dir === "right" && playerCol < COLS) playerCol++;

    drawPlayer();
    checkPickup();
}

document.querySelector("#up").addEventListener("click",  () => movePlayer("up"));
document.querySelector("#down").addEventListener("click", () => movePlayer("down"));
document.querySelector("#left").addEventListener("click", () => movePlayer("left"));
document.querySelector("#right").addEventListener("click", () => movePlayer("right"));

document.body.addEventListener("keydown", function (e) {

    if (e.key === "w" || e.key === "ArrowUp")    movePlayer("up");
    if (e.key === "s" || e.key === "ArrowDown")  movePlayer("down");
    if (e.key === "a" || e.key === "ArrowLeft")  movePlayer("left");
    if (e.key === "d" || e.key === "ArrowRight") movePlayer("right");

});
    
buildGrid();
placeGold();
drawPlayer();
