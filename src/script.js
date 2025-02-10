
// CREATE variable for number of cells in container
let cellNum = 16*16;

// DIVIDE container width by number of cells
let cellWidth = 500/16;
let cellHeight = 500/16;

// LOOP to create stated number of divs in container
for(i=1; i<cellNum; i++){
    const cellDiv = document.createElement('div');
    cellDiv.setAttribute('class',"cell")
    cellDiv.setAttribute('style',"width:31px;height:31px;background-color:white;")
    const contDiv = document.getElementById('container');
    contDiv.appendChild(cellDiv);
}

// DELEGATE event listening to container
const container = document.getElementById('container');

container.addEventListener("mouseover", (event) => {
    if(event.target.className === "cell"){
        event.target.style.backgroundColor = "black";
    }
}
)


// CREATE button to clear grid
const clearButton = document.createElement('button');
clearButton.textContent = "Clear Grid";
clearButton.setAttribute('style',"margin-top:10px;justify-item:center;")
const body = document.querySelector('body');
body.appendChild(clearButton);

// CREATE button to change grid size
const sizeButton = document.createElement('button');
sizeButton.textContent = "Change Grid Size";
sizeButton.setAttribute('style',"margin-top:10px;justify-item:center;")
body.appendChild(sizeButton);

// ADD event listener to size button

sizeButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (1-100): ");
    if(newSize < 1 || newSize > 100){
        alert("Invalid input. Please enter a number between 1 and 100.")
    }
    else{
        cellNum = newSize*newSize;
        cellWidth = 500/newSize;
        cellHeight = 500/newSize;
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.remove();
        })
        for(i=1; i<cellNum; i++){
            const cellDiv = document.createElement('div');
            cellDiv.setAttribute('class',"cell")
            cellDiv.setAttribute('style',`width:${cellWidth}px;height:${cellHeight}px;background-color:white;`)
            const contDiv = document.getElementById('container');
            contDiv.appendChild(cellDiv);
        }
    }
})


// ADD event listener to clear button
clearButton.addEventListener("click", () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
}
)

    











