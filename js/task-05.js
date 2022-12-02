const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

const nameEl = document.querySelector('#name-output');

function onInputChange(event) {
  event.currentTarget.value
    ? (nameEl.textContent = event.currentTarget.value)
    : (nameEl.textContent = 'Anonymous');
}
