//grid Display
const display = document.querySelector(".display");
//colorPicker
const colorPick = document.querySelector(".colorPic");
//buttons
const colorButton = document.querySelector(".color");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");
//slider
const slider = document.querySelector(".slider");
//grid box
const gridBox = document.querySelector(".gridBox");

//default Values
let color = colorPick.value;
let mode = "Color Mode";
let gridSize = slider.value;

createGrid(gridSize);
modeSelect(mode);

//pick color from color picker
colorPick.addEventListener("change", () => {
  color = colorPick.value;
});

//select mode by clicking buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    mode = e.target.value;
    modeSelect(mode);
  });
});

//update grid size display
slider.addEventListener("input", (e) => {
  display.textContent = `${e.target.value} X ${e.target.value}`;
});

//create grid
slider.addEventListener("change", (e) => {
  gridSize = e.target.value;
  createGrid(gridSize);
});

//create grid function
function createGrid(gridSize) {
  //delete all grids before creating new grids
  gridBox.innerHTML = "";

  gridBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let grid = document.createElement("div");
    gridBox.appendChild(grid);
    grid.classList.add("cell");
  }
}

//add color
function addColor() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      console.log(e);
      if (e.button === 0 && !Event.mousedown) {
        cell.style.backgroundColor = color;
      }
    });
  });
}

//remove color
function removeColor() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      if (e.button === 0 && !Event.mousedown) {
        cell.style.backgroundColor = "white";
      }
    });
  });
}

//clear all
function clearAll() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

//select mode
function modeSelect(mode) {
  if (mode === "Color Mode") {
    console.log("add color");
    addColor();
  } else if (mode === "Eraser") {
    console.log("remove color");
    removeColor();
  } else if (mode === "Clear") {
    clearAll();
  }
}
