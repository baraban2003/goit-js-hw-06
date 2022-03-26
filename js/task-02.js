'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredientsEl = document.querySelector('#ingredients');

const makeIngredientsList = options => {
  return options.map(options => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = options;
    ingredientItem.classList.add('item');
    return ingredientItem;
  });
};

const elements = makeIngredientsList(ingredients);
listOfIngredientsEl.append(...elements);
