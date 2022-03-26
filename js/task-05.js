const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
/* console.log(inputEl.value);
console.log(outputEl.textContent); */

inputEl.addEventListener('input', () => {
  /* console.log(typeof inputEl.value);
  console.log(inputEl.value); */
  if (inputEl.value.length === 0) {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputEl.value;
  }
});
