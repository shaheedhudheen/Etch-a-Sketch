const gridDisplay = document.querySelector(".gridDisplay");
const slider = document.querySelector(".slider");
const gridBox = document.querySelector(".gridbox");
const eraserMode = document.querySelector(".eraserMode");
const colorMode = document.querySelector(".colorMode");
const colorPicker = document.querySelector(".color");
const clearButton = document.querySelector('.clear');

//select mode
let modeSelector = colorMode.value;
console.log(modeSelector);

// //default option
createGrid(slider.value);
addRemoveColorModeSelector();


//select mode and add and remove color based on mode
function addRemoveColorModeSelector(){
  if (modeSelector === "Color Mode") {
    addColor();  
    } 
  }




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






// addColor();