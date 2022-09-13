//Create size of the grid
function sketch(size) {
    let sketch = document.querySelector('#container');
    let cells = sketch.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    sketch.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let newSize = size * size;
//Loop to create 16x16 grid of divs (256 squares total)
    for (let i = 0; i < newSize; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
        cell.style.backgroundColor = 'white';
        //adds class name of "cell" to div
        cell.classList.add('cell');
        //adds div in html to become a child of container
        sketch.insertAdjacentElement('beforeend', cell);
    }
}
sketch(16);

function changeSize(input) {
    if(input >=2 && input <= 100) {
        sketch(input);
    } else {
        alert('Error - Please enter a value between 2 and 100');
    }
}
