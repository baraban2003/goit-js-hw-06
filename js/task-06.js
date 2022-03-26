const inputValueEl = document.querySelector('#validation-input');
console.log(inputValueEl.dataset.length);

inputValueEl.addEventListener('blur', () => {
  if (
    parseInt(inputValueEl.value.length) !==
    parseInt(inputValueEl.dataset.length)
  ) {
    inputValueEl.classList.add('invalid');
  } else {
    inputValueEl.classList.remove('invalid');
    inputValueEl.classList.add('valid');
  }
});
