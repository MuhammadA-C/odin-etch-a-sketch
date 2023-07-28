/*

  Name: Muhammad Chambers
  Date: 

*/

const gridContainerWidth = 960;
const divBorderWidth = 2;
const grid = document.querySelector("#grid");

let size = 16;
let gridSize = (size * size);




for (let i = 0; i < gridSize; i++) {
  const div = document.createElement("div");
  const diveSize = (gridContainerWidth / size) - divBorderWidth;

  div.style.width = `${diveSize}px`;
  div.style.height = `${diveSize}px`;

  grid.appendChild(div);
}
