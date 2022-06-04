// implemetation for etch-a-sketch web app
//

const grid = document.getElementById("grid")

grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
grid.style.gridTemplateRows = 'repeat(16, 1fr)';


for (let i = 0; i < 16 * 16; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    grid.appendChild(square);
}