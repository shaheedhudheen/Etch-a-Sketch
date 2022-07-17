const eraserMode = document.querySelector(".eraserMode");
const colorMode = document.querySelector(".colorMode");
const colorPicker = document.querySelector(".color");
const clearButton = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");

let buttonValue = colorMode.value;
// we use the .forEach method to iterate through each button
function buttonSelect(){
    buttons.forEach((button) => {
      // and for each one we add a 'click' listener
      button.addEventListener("click", () => {
        buttonValue = button.value;
      });
    });
}

buttonSelect();