"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxesEl = document.querySelectorAll('#controls button');
const boxesEl = document.querySelector('#boxes');


createBoxesEl[0].addEventListener('click', createBoxes);

//Создание коробок
function createBoxes() {
const numEl = document.querySelector('#controls input');
  
for (let i = 0; i < numEl.value; i += 1) {
  const createDiv = document.createElement('div');
  boxesEl.append(createDiv);
   
  } 

  //размеры и раскраска коробок
  const divArrayEl = boxesEl.children;
  const startWidth = 30;
  const startHaight = 30;
  
  for (let i = 0; i < divArrayEl.length; i += 1) {
  divArrayEl[i].style.width = `${startWidth+10*i}px`;
  divArrayEl[i].style.height = `${startHaight+10*i}px`;
  divArrayEl[i].style.backgroundColor = getRandomHexColor();
  divArrayEl[i].style.marginTop = '2px';
  }
  //Очистка инпута
  numEl.value = "";
};

//удаление коробок
createBoxesEl[1].addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const remomeDivs = document.querySelectorAll('#boxes > div');
  remomeDivs.forEach(e => e.remove());

 }