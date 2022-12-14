// INPUTS //

// slider to get size from input 'gridSize'
let gridSize = document.getElementById("gridSize");
gridSize.addEventListener("input", () => resetGrid(gridSize.value));

// colorpicker to get color from input 'penColor'
let inputPen = document.getElementById("penColor");
inputPen.addEventListener("input", () => setColor(inputPen.value));

// colorpicker to get color from input 'backgroundColor'
let backgroundColor = document.getElementById("backgroundColor");
backgroundColor.addEventListener("input", () => setBackground(backgroundColor.value));

// BUTTONS //

// button to select grid size
const btnSquares = document.querySelector('#btnSquares');
btnSquares.addEventListener('click', resizeGrid);
btnSquares.textContent = ('Grid Size 16x16');

// button random color
const btnRandom = document.querySelector('#btnRandom');
btnRandom.addEventListener('click', () => setColor('random'));

// button fade to black
const btnFader = document.querySelector('#btnFader');
btnFader.addEventListener('click', () => setColor('fader'));

// button toggle grid lines
const btnToggle = document.querySelector('#btnToggle');
btnToggle.addEventListener('click', () => toggleGridLines());

// button eraser
const btnEraser = document.querySelector('#btnEraser');
btnEraser.addEventListener('click', () => setColor(backgroundColor.value));

// button reset grid
const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () => resetGrid(gridSize.value));

// MAIN //

let penActive = false;
const sketchpad = document.querySelector('.sketchpad').addEventListener('click', togglePen);

// create grid on startup
createGrid(16);

// --------------- FUNCTIONS --------------- //

function togglePen() {
  if (penActive === false) {
    penActive = true;
  } else {
    penActive = false;
  }
}
// ----------------------------------------- //
function createGrid(squares) {

  let gridSize = squares * squares;
  let edgeLength = 640 / squares;

  const sketchpad = document.querySelector('.sketchpad');

  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.toggle('myDiv');
    div.classList.toggle('gridlines');
    div.style.cssText = 'width: ' + edgeLength + 'px; height: ' + edgeLength + 'px; background-color: ' + backgroundColor.value + '; display: flex; justify-content: center; align-items: center; flex: 0 0 ' + edgeLength + 'px;';
    sketchpad.appendChild(div);
  }
  setColor(inputPen.value);
}
// ----------------------------------------- //
function setColor(color) {

  const div = document.querySelectorAll('.sketchpad .myDiv');

  if (color === 'random') {
    for (let i = 0; i < div.length; i++) {
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      div[i].addEventListener('mouseover', function () {
        if (penActive === true) {
          div[i].style.backgroundColor = randomColor;
        }
      });
    }
  } else if (color === 'fader') {
    let rgb = 255;
    let faderColor = 'rgb(' + rgb + ',' + rgb + ',' + rgb + ');';
    for (let i = 0; i < div.length; i++) {
      div[i].addEventListener('mouseover', function () {
        rgb = rgb - 5;
        faderColor = 'rgb(' + rgb + ',' + rgb + ',' + rgb + ')';
        if (penActive === true) {
          div[i].style.backgroundColor = faderColor;
        }
      });
    }
  }
  else {
    for (let i = 0; i < div.length; i++) {
      div[i].addEventListener('mouseover', function () {
        if (penActive === true) {
          div[i].style.backgroundColor = color;
        }
      });
    }
  }
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
function resetGrid(squares) {
  deleteGrid();
  createGrid(squares);
  btnSquares.textContent = ('Grid Size ' + squares + 'x' + squares);
  gridSize.value = squares;
}
// ----------------------------------------- //
function resizeGrid(squares) {
  squares = prompt('Edge length in squares? (Max. is 64) ', '16')

  if (squares <= 64) {
    deleteGrid();
    createGrid(squares);
    btnSquares.textContent = ('Grid Size ' + squares + 'x' + squares);
  } else {
    resizeGrid()
  }
  gridSize.value = squares;
}
// ----------------------------------------- //
function toggleGridLines() {
  const myNodeList = document.querySelectorAll('.myDiv');
  for (let i = 0; i < myNodeList.length; i++) {
    myNodeList[i].classList.toggle('gridlines');
  }
}
// ----------------------------------------- //
function setBackground(color) {
  const myNodeList = document.querySelectorAll('.myDiv');
  for (let i = 0; i < myNodeList.length; i++) {
    myNodeList[i].style.backgroundColor = color;
  }
}
// ----------------------------------------- //