function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let el = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    el.push(div);
  }
  return el;
}

btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = '';
  inputEl.value = '';
}

btnCreate.addEventListener('click', () => {
  boxes.append(...createBoxes(inputEl.value));
});

console.log(inputEl.value);
