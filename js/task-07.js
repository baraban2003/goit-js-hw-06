const fontControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = "56px";

fontControlEl.addEventListener('input', () => {
    textEl.style.fontSize = `${fontControlEl.value}px`;
}); 