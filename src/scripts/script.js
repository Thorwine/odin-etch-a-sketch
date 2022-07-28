const body = document.querySelector('body');

// container
const container = document.createElement('div');
container.classList.toggle('myContainer')
container.style.cssText = 'width: 960px; height: 960px; background-color: darkgrey; display: flex; flex-wrap: wrap;';
body.appendChild(container);

// grid of divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.toggle('myDiv');
  div.style.cssText = 'width: 60; height: 60px; background-color: white; display: flex; justify-content: center; align-items: center; flex: 0 0 60px; outline: 1px solid limegreen;';
  div.textContent = i;
  container.appendChild(div);
}

// mouseover event
const div = document.querySelectorAll('.myContainer .myDiv');
for (let i = 0; i < div.length; i++) {
  div[i].addEventListener('mouseover', () => div[i].style.backgroundColor = 'red');
}

