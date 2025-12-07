const COLORS = {
  1: "lightgreen",
  2: "lightcyan",
  3: "lightpink",
  4: "lime",
  5: "yellow",
  6: "orange",
  7: "#9dd1e7ff",
  8: "beige",
  9: "#ffcc32ff",
};

const columnsInput = document.getElementById("columns-input");
const rowsInput = document.getElementById("rows-input");
const numbersDiv = document.getElementById("numbers");
const sumSpan = document.querySelector("#sum span");
const newButton = document.querySelector("button");

let totalSum = 0;

function buildGrid() {
  const nCols = Number(columnsInput.value);
  const nRows = Number(rowsInput.value);

  numbersDiv.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;

  numbersDiv.innerHTML = "";

  for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++) {
      const value = randomNumber(1, 10); 

      const cell = document.createElement("div");
      cell.textContent = value;
      cell.style.backgroundColor = COLORS[value];

      cell.addEventListener("click", () => {
        totalSum += value;
        sumSpan.textContent = totalSum;
      });

      numbersDiv.appendChild(cell);
    }
  }
}

buildGrid();

newButton.addEventListener("click", buildGrid);