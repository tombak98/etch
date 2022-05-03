
// setting starting parameter
let amount = 16;
let boxWidth = 960/amount;
const padSize = 960;

// set up button for setting pixels
const button = document.querySelector("#button");
button.addEventListener("click",() => {
    ans = parseInt(prompt("How many pixels do you want per row/column?"));
    if (!ans) {ans = 16;}
    amount = ans;
    boxWidth = 960/amount;
    resetScreen();
});

// adjusting the container
let container = document.querySelector("#container");

// create boxes
function addBox() {
    let box = document.createElement("div");
    box.classList.add("emptyBox");
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxWidth}px`;
    box.style.backgroundColor = "white";
    container.appendChild(box);
};

for (let i = 0; i < amount*amount; i++) {
    addBox();
};

// make them turn black or rainbow when hovered
function turnBlack(e) {
    this.style.backgroundColor = "black";
};

function turnRainbow(e) {
    let randomRed = Math.random()*255;
    let randomBlue = Math.random()*255;
    let randomGreen = Math.random()*255;
    this.style.backgroundColor = `rgb(${randomRed},${randomBlue},${randomGreen})`;
}

// default set color
let boxes = document.querySelectorAll(".emptyBox");
boxes.forEach(box => box.addEventListener('mouseover',turnBlack));

// reset for screen size
function resetScreen() {
    boxes.forEach(box => box.remove());
    for (let i = 0; i < amount*amount; i++) {
        addBox();
    };
    boxes = document.querySelectorAll(".emptyBox");
    boxes.forEach(box => box.addEventListener('mouseover',turnBlack));
}

// buttons for changing color
const black = document.querySelector(".black");
black.addEventListener("click", () => {
    boxes.forEach(box => box.removeEventListener('mouseover',turnRainbow));
    boxes.forEach(box => box.addEventListener('mouseover',turnBlack));
});

const color = document.querySelector(".color");
color.addEventListener("click", () => {
    boxes.forEach(box => box.removeEventListener('mouseover',turnBlack));
    boxes.forEach(box => box.addEventListener('mouseover',turnRainbow));
});