const velueEl = document.querySelector('#value');
const butonsEl = document.querySelector('#counter');

//console.dir(velueEl);
/* velueEl.textContent = 0; */
let counter = 0;

butonsEl.firstElementChild.addEventListener('click', event => {
  // console.log(event);
  velueEl.textContent = counter -= 1;
});

butonsEl.lastElementChild.addEventListener('click', event => {
  //console.log(event);
  velueEl.textContent = counter += 1;
});
