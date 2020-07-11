const container = document.querySelector('.container');

function createDivs () {
    for (let i=0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }  
}
createDivs ()

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

