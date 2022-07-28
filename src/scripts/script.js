
// create grid on startup with fixed edgeLength
let squares = 32;
createGrid(squares);

// button to select squares and refresh grid
const btnSquares = document.querySelector('#btnSquares');
btnSquares.addEventListener('click', refreshGrid);


// --------------- FUNCTIONS --------------- //

function createGrid(squares) {

  let gridSize = squares * squares;
  let edgeLength = 960 / squares;

  const container = document.querySelector('.myContainer');

  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.toggle('myDiv');
    div.style.cssText = 'width: ' + edgeLength + 'px; height: ' + edgeLength + 'px; background-color: white; display: flex; justify-content: center; align-items: center; flex: 0 0 ' + edgeLength + 'px; outline: 1px solid limegreen;';
    container.appendChild(div);
  }

  const div = document.querySelectorAll('.myContainer .myDiv');
  for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('mouseover', () => div[i].style.backgroundColor = 'red');
  }
}
// ----------------------------------------- //

function deleteGrid() {
  const container = document.querySelector('.myContainer');
  let nodes = container.childNodes.length;

  for (let i = 0; i < nodes; i++) {
    container.removeChild(container.firstElementChild);
  }
}
// ----------------------------------------- //

function refreshGrid() {
  let squares = prompt('Edge length in squares? (Max. is 100) ', '32')

  if (squares <= 100) {
    deleteGrid();
    createGrid(squares);
  } else {
    refreshGrid()
  }
}
// ----------------------------------------- //