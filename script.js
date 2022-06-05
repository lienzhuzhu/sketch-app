// implemetation for etch-a-sketch web app
//

const grid = document.getElementById("grid")
let colorMode = "black";

function setModeBlack() {
    colorMode = "black";
}

function setModeErase() {
    colorMode = "erase";
}

let size = 16;

grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    grid.appendChild(square);
}

function colorSquare() {
    if (colorMode == "black") {
        this.style.backgroundColor = "black";
    } else if (colorMode == "erase") {
        this.style.backgroundColor = "white";
    }
}

for (let i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    let pixel = document.getElementsByClassName("grid-square")[i];
    pixel.addEventListener("mouseover", colorSquare);
}

document.getElementById("black-button").addEventListener("click", setModeBlack);
document.getElementById("erase-button").addEventListener("click", setModeErase);