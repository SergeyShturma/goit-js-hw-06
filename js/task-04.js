const incElem = document.querySelector("[data-action='increment']");
const decElem = document.querySelector("[data-action='decrement']");
const valueElem = document.querySelector('#value');

let counterValue = 0;

const inc = () => {
  counterValue += 5;

  valueElem.textContent = counterValue;
};

const dec = () => {
  counterValue -= 5;

  valueElem.textContent = counterValue;
};

incElem.addEventListener('click', inc);
decElem.addEventListener('click', dec);
