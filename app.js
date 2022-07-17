const gridDisplay = document.querySelector(".gridDisplay");
const slider = document.querySelector(".slider");
const gridBox = document.querySelector(".gridbox");
const colorMode = document.querySelector(".colorMode");
const rainbowMode = document.querySelector(".rainbowMode");
const eraserMode = document.querySelector(".eraserMode");
const colorPicker = document.querySelector(".color");
const clearButton = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");

//Select mode
let defaultMode = "color";
let currentMode = defaultMode;
colorMode.onclick = () => setMode("color");
rainbowMode.onclick = () => setMode("rainbow");
eraserMode.onclick = () => setMode("eraser");

//setmode
function setMode(mode) {
  currentMode = mode;
  console.log(currentMode);
}

//select mode and add and remove color based on mode
function addRemoveColorModeSelector() {
  if (currentMode === "color") {
    addColor();
  } else if (currentMode === "eraser") {
    removeColor();
  }
}

// //default option
createGrid(slider.value);

//clear grids before slide
function deleteChild() {
  gridBox.innerHTML = "";
}

let value = slider.value;

slider.addEventListener("input", (event) => {
  let value = event.target.value;
  gridDisplay.textContent = `${value} X ${value}`;
});

slider.addEventListener("change", (event) => {
  let value = event.target.value;
  deleteChild();
  createGrid(value);
});

//create grid and add color to created grids
function createGrid(gridSize) {
  gridBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i <= gridSize * gridSize; i++) {
    let grid = document.createElement("div");
    gridBox.appendChild(grid);
    grid.classList.add("cell");
  }
  addRemoveColorModeSelector();
}

//add color
function addColor() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      console.log(e);
      if (e.button === 0 && !Event.mousedown) {
        cell.classList.add("addColor");
      }
    });
  });
}

//removeColor
function removeColor() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      if (e.button === 0 && !Event.mousedown) {
        cell.classList.toggle("addColor");
      }
    });
  });
}
