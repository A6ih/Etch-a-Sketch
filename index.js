const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn")
const slider = document.querySelector(".slider")
const colorPicker = document.querySelector("#color-picker")
const eraser = document.querySelector("#eraser")
let color = colorPicker.value;
let inputNum = slider.value;

eraser.addEventListener ("click", () => {
    color = "white"
})

colorPicker.addEventListener ("input", () => {
    color = colorPicker.value;
})

function gridsCreation() {
    for (let i = 0; i < (inputNum * inputNum); i++) {
        const createGrids = document.createElement("div")
        createGrids.classList.add("grids")
        const gridSize = (1 / inputNum) * 100;
        createGrids.style.width = gridSize + "%"
        createGrids.style.height = gridSize + "%"
        container.append(createGrids);
    }
}

slider.addEventListener ("input", () => {
    inputNum = slider.value;
    container.innerHTML = ""
    gridsCreation()
})

resetBtn.addEventListener ("click", function() {
    container.innerHTML = "";
    gridsCreation();
})

function coloring(event) {
     event.target.style.backgroundColor = color;
}

// If mouse is held down triggers coloring function
container.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = color;
    container.addEventListener("mouseover", coloring);
});

window.addEventListener("mouseup", () => {
    container.removeEventListener("mouseover", coloring);
});



//calls this function when the page loads
gridsCreation()