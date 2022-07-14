let slider = document.querySelector(".slider");
let gridRange = document.querySelectorAll(".gridRange");

console.log(slider.value);
console.log(gridRange);

gridRange.forEach((e) => {
  e.textContent = slider.value;
});

// Update the current slider value (each time you drag the slider handle)
slider.addEventListener("input", (e) => {
  gridRange.forEach((e) => {
    e.textContent = slider.value;
  });
});
