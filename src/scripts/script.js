// const btnSquares = document.querySelector('#squares');
// btnSquares.addEventListener('click', getSquares);

createGrid(32);

// mouseover event
const div = document.querySelectorAll('.myContainer .myDiv');
for (let i = 0; i < div.length; i++) {
  div[i].addEventListener('mouseover', () => div[i].style.backgroundColor = 'red');
}

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
}