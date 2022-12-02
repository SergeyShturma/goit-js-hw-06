const inputEl = document.querySelector('#validation-input');

const onInputBlur = function () {
  if (inputEl.getAttribute('data-length') == inputEl.value.length) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('input', onInputBlur);
