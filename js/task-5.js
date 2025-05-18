function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/*
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener('click', handleClick);

function handleClick() {
  const colorValue = getRandomHexColor();
  document.body.style.backgroundColor = colorValue;
  color.textContent = colorValue;
}
*/

const body = document.querySelector('body');
const out = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); 
  out.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});

console.log(getRandomHexColor());