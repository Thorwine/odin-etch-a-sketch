// button to select grid size
const btnSquares = document.querySelector('#btnSquares');
btnSquares.addEventListener('click', resizeGrid);
btnSquares.textContent = ('Grid Size 16x16');

// get color from input 'penColor'
let inputPen = document.getElementById("penColor");
inputPen.addEventListener("input", () => setColor(inputPen.value));

// get color from input 'backgroundColor'
let backgroundColor = document.getElementById("backgroundColor");
backgroundColor.addEventListener("input", () => setBackground(backgroundColor.value));

// button random color
const btnRandom = document.querySelector('#btnRandom');
btnRandom.addEventListener('click', () => setColor('random'));

// button fade to black
const btnFader = document.querySelector('#btnFader');
btnFader.addEventListener('click', () => setColor('fader'));

// button toggle grid lines
const btnToggle = document.querySelector('#btnToggle');
btnToggle.addEventListener('click', () => toggleGridLines());

// button reset grid
const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () => resetGrid(squares));

// create grid on startup with fixed edgeLength
let squares = 16;
createGrid(squares);

// --------------- FUNCTIONS --------------- //

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
}
// ----------------------------------------- //

function resizeGrid() {
  squares = prompt('Edge length in squares? (Max. is 64) ', '16')

  if (squares <= 64) {
    deleteGrid();
    createGrid(squares);
    btnSquares.textContent = ('Grid Size ' + squares + 'x' + squares);
  } else {
    resizeGrid()
  }
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