/*
  Name: Muhammad Chambers
  Date: 07/27/2023

  Overview: The Odin Project - Foundations : Etch-A-Sketch Project
  
  For this project we were supposed to create a dynamica etch-a-sketch board that changes
  its size based on user input ranging from 1-100. And as the user hovers over a grid cell,
  the cell will change colors.
*/

const gridContainerWidth = 960;
const divBorderWidth = 2;
const grid = document.querySelector("#grid");
const resetBtn = document.querySelector(".btn-reset");
const changeGridSizeBtn = document.querySelector(".btn-grid-size");

//Dynamically creates the size of the grid
createGrid();

let divs = document.querySelectorAll("#grid > div");

//Changes grid squares color if mouse hovers over it
for(let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseenter", () => {
    divs[i].style.backgroundColor = "black";
  });
}

//Resets the color of the grid squares if the reset button is clicked
resetBtn.addEventListener("click", () => {
  turnOffBtnEffect(resetBtn);
  setTimeout(turnOffBtnEffect, 100);

  for(let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "white";
  }
});

changeGridSizeBtn.addEventListener("click", () => {
  location.reload();
});

function turnOffBtnEffect(button) {
  button.classList.toggle("btn-hover-effect");
}

function createGrid() {
  let isInputValid = false;
  let divsPerRow;

  while(!isInputValid) {
    let userInput = prompt("Enter a number between 1-100 for the grid size."); 

    if(userInput > 0 && userInput <= 100) {
      divsPerRow = userInput;
      break;
    }
  }

  const gridSize = (divsPerRow * divsPerRow);

  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    const diveSize = (gridContainerWidth / divsPerRow) - divBorderWidth;
  
    div.style.width = `${diveSize}px`;
    div.style.height = `${diveSize}px`;
    grid.appendChild(div);
  }
}


