function sketch() {
//Loop to create 16x16 grid of divs (256 squares total)
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    //adds class name of "cell" to div
    div.classList.add('cell');
    //adds div in html to become a child of container
    container.appendChild(div);
}
//Create event listener for the hover effect
    //Selects all of the classes that are called "cell" and store in variable div
    const div = document.querySelectorAll('.cell');
    //forEach goes through all of the variable's contents
    div.forEach((div) => {
        div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
        })
    })
}
sketch();