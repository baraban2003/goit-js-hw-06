const inputValueEl = document.querySelector("#validation-input");
console.log(inputValueEl.dataset.length);

inputValueEl.addEventListener("blur", () => {
    if (inputValueEl.value.length > 0 && inputValueEl.value.length <= inputValueEl.dataset.length ) {
        inputValueEl.classList.add("invalid");
    }
    else if (inputValueEl.value.length > inputValueEl.dataset.length)  {
        inputValueEl.classList.remove("invalid");
        inputValueEl.classList.add("valid");
    }
      else {
        inputValueEl.classList.remove("invalid");
        inputValueEl.classList.remove("valid");
    }
});