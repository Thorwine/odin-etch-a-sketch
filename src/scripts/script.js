const body = document.querySelector('body');

// Container
const container = document.createElement('div');
container.classList.toggle('container')
container.style.cssText = 'width: 960px; height: 960px; background-color: darkgrey; display: flex; flex-wrap: wrap;';
body.appendChild(container);

// Divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.toggle('div');
  div.style.cssText = 'width: 60; height: 60px; background-color: limegreen; flex: 0 0 60px;';
  div.textContent = 'myDiv';
  container.appendChild(div);
}

