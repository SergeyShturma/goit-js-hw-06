const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('change', onInputChange);

function onInputChange() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
