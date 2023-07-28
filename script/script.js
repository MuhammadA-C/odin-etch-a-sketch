/*

  Name: Muhammad Chambers
  Date: 

*/

const gridContainerWidth = 960;
const divBorderWidth = 2;
const grid = document.querySelector("#grid");
const button = document.querySelector("button");

let size = 16;
let gridSize = (size * size);

//Dynamically creates the size of the grid
for (let i = 0; i < gridSize; i++) {
  const div = document.createElement("div");
  const diveSize = (gridContainerWidth / size) - divBorderWidth;

  div.style.width = `${diveSize}px`;
  div.style.height = `${diveSize}px`;
  grid.appendChild(div);
}

const divs = document.querySelectorAll("#grid > div");

//Changes grid squares color if mouse hovers over it
for(let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseenter", () => {
    divs[i].style.backgroundColor = "black";
  });
}

//Resets the color of the grid squares if the reset button is clicked
button.addEventListener("click", () => {
  turnOffBtnEffect();
  setTimeout(turnOffBtnEffect, 100);

  for(let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "white";
  }
});

function turnOffBtnEffect() {
  button.classList.toggle("button-hover-effect");
}


