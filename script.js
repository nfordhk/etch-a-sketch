const container = document.querySelector('.container');

function createDivs () {
    for (let i=0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }  
}

createDivs ();
