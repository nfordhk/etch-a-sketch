const container = document.querySelector('.container');

function newGrid () {
    const newGridButton = document.querySelector('.new_grid_button');
    newGridButton.addEventListener('click', () => {
        let newGridSize = prompt ('Select the size of your grid 1-12.')
        resetGrid()
        return newGridSize
    })
}
newGrid()

function createDivs (gridSize) {
    for (let i=0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }  
}
createDivs(12) //12 is the default

function changeDivsColor () {
    const divColor = document.querySelectorAll('.grid-item')
    console.log (divColor)
    divColor.forEach (div => {
        div.addEventListener ('mouseover', () => 
        div.style.backgroundColor = 'black')
        //'rgb(' + a + ',' + b + ',' + c + ')';
    })
}
changeDivsColor()

//clearGrid button
function clearGrid () {
    const clearButton = document.querySelector('.clear_button')
    const divColor = document.querySelectorAll('.grid-item')
    
    clearButton.addEventListener('click', () => {
        divColor.forEach (div => {
            div.style.backgroundColor = 'rgb(' + 242 + ',' + 252 + ',' + 245 + ')';
        })
    })
}
clearGrid()

//resetGrid for when a new grid is created
function resetGrid () {
    const divColor = document.querySelectorAll('.grid-item')
    divColor.forEach (div => {
        div.style.backgroundColor = 'rgb(' + 242 + ',' + 252 + ',' + 245 + ')';
    })
}
resetGrid()