const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  
  return listItem;
})
 console.log(elements);

const listEl = document.querySelector('#ingredients');
listEl.append(...elements);

 









