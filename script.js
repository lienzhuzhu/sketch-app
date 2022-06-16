// implemetation for etch-a-sketch web app
//

const grid = document.getElementById("grid");
const slider = document.getElementById("slider");
const penBtn = document.getElementById("pen-button")
const eraseBtn = document.getElementById("erase-button");
const clearBtn = document.getElementById("clear-button");

let mode = "erase";
let color = "black";
let draw = false;
let size = 16;

function setSize() {
    grid.innerHTML = '';
    size = slider.value;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        grid.appendChild(square);
    }

    for (let i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        let pixel = document.getElementsByClassName("grid-square")[i];
        pixel.addEventListener("mouseover", colorSquare);
    }
}

function drawSwitch() {
    draw = !draw;
}

function setMode() {
    mode = this.getAttribute("data-mode");
}

function colorSquare() {
    if (draw) {
        if (mode == "pen") {
            this.style.backgroundColor = color;
        } else if (mode == "erase") {
            this.style.backgroundColor = "white";
        }
    }
}

slider.addEventListener("change", setSize);
document.addEventListener("DOMContentLoaded", setSize);

grid.addEventListener("click", drawSwitch);

penBtn.addEventListener("click", setMode);
eraseBtn.addEventListener("click", setMode);

clearBtn.addEventListener("click", setSize);