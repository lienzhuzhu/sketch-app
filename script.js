// implemetation for etch-a-sketch web app
//

const grid = document.getElementById("grid");
const slider = document.getElementById("slider");
const colorPicker = document.getElementById("color-selector");
const clearBtn = document.getElementById("clear-button");
const gridBtn = document.getElementById("grid-switch");
const sizeDisplay = document.getElementById("size-display");
const modeBtnArr = document.getElementsByClassName("mode-button");
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let color = "";
let mode = "erase";
let gridBorder = false;
let draw = false;

function setColor() {
    color = colorPicker.value;
    colorPicker.parentElement.style.backgroundColor = color;
}

function setSize() {
    grid.innerHTML = '';
    let size = slider.value;
    sizeDisplay.innerText = size + " x " + size;

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

    setGridBorder();
}

function gridSwitch() {
    gridBorder = !gridBorder;
    setGridBorder();
}

function setGridBorder() {
    let gridArr = document.getElementsByClassName("grid-square");
    if (gridBorder) {
        for (let i = 0; i < gridArr.length; i++) {
            gridArr[i].style.border = "1px solid black";
        }
        gridBtn.innerText = "Turn Grid Off";
        gridBtn.classList.add("selected");
    } else {
        for (let i = 0; i < gridArr.length; i++) {
            gridArr[i].style.border = "none";
        }
        gridBtn.innerText = "Turn Grid On";
        gridBtn.classList.remove("selected");
    }
}

function drawSwitch() {
    draw = !draw;
}

function setMode() {
    let oldMode = mode;
    mode = this.getAttribute("data-mode");

    for (let i = 0; i < modeBtnArr.length; i++) {
        let item = modeBtnArr[i];
        if (item.getAttribute("data-mode") !== mode) {
            item.classList.remove("selected");
        } else {
            if (item.getAttribute("data-mode") !== oldMode) {
                item.classList.add("selected");
            }
        }
    }
}

function getRandomColor() {
    let hex = '#';
    for(let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index];
    }
    return hex;
}

function colorSquare() {
    if (draw) {
        if (mode == "pen") {
            this.style.backgroundColor = color;
        } else if (mode == "rainbow") {
            this.style.backgroundColor = getRandomColor();
        } else if (mode == "erase") {
            this.style.backgroundColor = "white";
        }
    }
}

colorPicker.oninput = () => setColor();
document.addEventListener("DOMContentLoaded", setColor);

slider.addEventListener("input", setSize);
document.addEventListener("DOMContentLoaded", setSize);

grid.onclick = () => drawSwitch();
clearBtn.onclick = () => setSize();
gridBtn.onclick = () => gridSwitch();

for (let i = 0; i < modeBtnArr.length; i++) {
    modeBtnArr[i].addEventListener("click", setMode);
}

