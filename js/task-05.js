const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl.value);
console.log(outputEl.textContent);

inputEl.addEventListener("input", () => {
    outputEl.textContent = inputEl.value;
});