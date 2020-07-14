const container = document.querySelector('.container');

//style.gridTemplateRows 
function createCSSGrid(size) {
    //container.style.gridTemplateColumns = repeat()
    container.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;  
}
//================================================================================
//create the grid
function createDivs (gridSize) {
    for (let i=0; i < gridSize ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }  
}
createDivs(64) //12 is the default
//================================================================================
//newGrid button
function newGrid () {
    const newGridButton = document.querySelector('.new_grid_button');
    newGridButton.addEventListener('click', () => {
        const newGridSize = prompt ('Select the size of your grid 1-64.')
        resetGrid()
        createDivs(newGridSize)
        createCSSGrid(newGridSize)
    })
}
newGrid()
//================================================================================
//changeDivsColor changes the DIVs color during mouseover event
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
//================================================================================
//resetGrid for when a new grid is created
function resetGrid () {
    const divColor = document.querySelectorAll('.grid-item')
    divColor.forEach (div => {
        div.style.backgroundColor = 'rgb(' + 242 + ',' + 252 + ',' + 245 + ')';
    })
}
//================================================================================
//clearGrid button
function clearGrid () {
    const clearButton = document.querySelector('.clear_button')
    clearButton.addEventListener('click', () => {
        resetGrid()
    })
}
clearGrid()

