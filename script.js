let slider = document.querySelector(".slider");
let gridRange = document.querySelector(".gridRange");
let gridBox = document.querySelector(".gridbox");


let gridSize = slider.value;


gridBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
console.log(gridSize);

for (let i = 0; i <= gridSize * gridSize; i++) {
  let grid = document.createElement("div");
  gridBox.appendChild(grid);
  grid.classList.add("cell"); 
}

//create a grid from slider size



// Update the current slider value (each time you drag the slider handle)


// function sliderValue(){
//  const sliderValue = slider.addEventListener("input", (e) => {
//     gridSize = slider.value;
//     gridRange.textContent = `${slider.value} X ${slider.value}`;
//   });
//   return sliderValue;
// }

