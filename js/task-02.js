"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  ];
const listOfIngredientsEl = document.querySelector("#ingredients");

const makeIngredientsList = options => {
  return options.map(options => {
    const ingredientsList = document.createElement('li');
    ingredientsList.textContent = options;
    ingredientsList.classList.add("item");
    return listOfIngredientsEl.append(ingredientsList);
  });
};

const elements = makeIngredientsList(ingredients);
