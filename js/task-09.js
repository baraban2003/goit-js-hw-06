function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.widget button');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');


buttonEl.addEventListener('click', () => {
  let newColor = getRandomHexColor();
  console.log(newColor);
  bodyEl.style.backgroundColor = newColor;
  colorEl.textContent = newColor;
});

