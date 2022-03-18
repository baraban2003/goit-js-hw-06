const velueEl = document.querySelector("#value");
const butonsEl = document.querySelectorAll("#counter button");
//console.dir(velueEl);
velueEl.textContent = 0;

butonsEl[0].addEventListener('click', event => {
   // console.log(event);
          velueEl.textContent = parseInt(velueEl.textContent) - 1;
});

butonsEl[1].addEventListener('click', event => {
    //console.log(event);
      velueEl.textContent = parseInt(velueEl.textContent) + 1;
});