
// create grid on startup with fixed edgeLength
let squares = 32;
createGrid(squares);

// button to select squares and refresh grid
const btnSquares = document.querySelector('#btnSquares');
btnSquares.addEventListener('click', resizeGrid);

// button to select color randomizer
const btnRandom = document.querySelector('#btnRandom');
btnRandom.addEventListener('click', () => setColor('random'));

// button for fade to black
const btnFader = document.querySelector('#btnFader');
btnFader.addEventListener('click', () => setColor('fader'));

// button to select color randomizer
const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () => resetGrid());

// --------------- FUNCTIONS --------------- //

function createGrid(squares) {

  let gridSize = squares * squares;
  let edgeLength = 960 / squares;

  const sketchpad = document.querySelector('.sketchpad');

  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.toggle('myDiv');
    div.style.cssText = 'width: ' + edgeLength + 'px; height: ' + edgeLength + 'px; background-color: lightgrey; display: flex; justify-content: center; align-items: center; flex: 0 0 ' + edgeLength + 'px;';
    sketchpad.appendChild(div);
  }
  setColor('black');
}
// ----------------------------------------- //

function deleteGrid() {
  const sketchpad = document.querySelector('.sketchpad');
  let nodes = sketchpad.childNodes.length;

  for (let i = 0; i < nodes; i++) {
    sketchpad.removeChild(sketchpad.firstElementChild);
  }
}
// ----------------------------------------- //

function resetGrid() {
  deleteGrid();
  createGrid(32);
  console.clear();
}
// ----------------------------------------- //

function resizeGrid() {
  let squares = prompt('Edge length in squares? (Max. is 64) ', '32')

  if (squares <= 64) {
    deleteGrid();
    createGrid(squares);
  } else {
    resizeGrid()
  }
}
// ----------------------------------------- //

function setColor(color) {

  const div = document.querySelectorAll('.sketchpad .myDiv');

  if (color === 'random') {
    for (let i = 0; i < div.length; i++) {
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      div[i].addEventListener('mouseover', () => div[i].style.backgroundColor = randomColor);
    }
  } else if (color === 'fader') {
    let rgb = 255;
    let faderColor = 'rgb(' + rgb + ',' + rgb + ',' + rgb + ');';
    for (let i = 0; i < div.length; i++) {
      div[i].addEventListener('mouseover', function () {
        rgb = rgb - 5;
        faderColor = 'rgb(' + rgb + ',' + rgb + ',' + rgb + ')';
        div[i].style.backgroundColor = faderColor;
      });
    }
  }
  else {
    for (let i = 0; i < div.length; i++) {
      div[i].addEventListener('mouseover', () => div[i].style.backgroundColor = color);
    }
  }
}
// ----------------------------------------- //