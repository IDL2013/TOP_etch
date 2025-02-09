
// CREATE variable for number of cells in container
let cellNum = 16*16;

// DIVIDE container width by number of cells
let cellWidth = 500/16;
let cellHeight = 500/16;

// LOOP to create stated number of divs in container
for(i=1; i<cellNum; i++){
    const cellDiv = document.createElement('div');
    cellDiv.setAttribute('id',"cell")
    cellDiv.setAttribute('style',"width:31px;height:31px;background-color:white;")
    const contDiv = document.getElementById('container');
    contDiv.appendChild(cellDiv);
}

// CREATE event listener for mouse hoverover;
const cell = document.getElementById('cell');
cell.addEventListener("mouseout", (event) => {
    cell.setAttribute('style', "background-color:blue;")
});









