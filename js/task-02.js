const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElements = ingredients.map((value) => {
  const itemElement = document.createElement("li");
  itemElement.classList.add("item");
  itemElement.textContent = value;
  return itemElement;
});

const list = document.querySelector("#ingredients");
list.append(...listElements);
