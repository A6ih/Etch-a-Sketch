const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn")
let inputNum = 16;

function coloring(event) {
     event.target.style.backgroundColor = "red";
}

container.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "red";
    container.addEventListener("mouseover", coloring);
});

window.addEventListener("mouseup", () => {
    container.removeEventListener("mouseover", coloring);
});


function resetGrid() {
    container.textContent = "";
    let input = Number(prompt("Choose a number between '2 to 99' for gridsize"))
    inputNum = input;
}

resetBtn.addEventListener ("click", function() {
    resetGrid()
    gridsCreation();
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

gridsCreation()