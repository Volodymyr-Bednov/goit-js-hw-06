const categories = document.querySelector("#categories");
const arrayCategories = categories.children;
console.log(`Number of categories: ${arrayCategories.length}`);

for (let i = 0; i < arrayCategories.length; i += 1) {
  const element = arrayCategories[i];
  const itemText = element.firstElementChild.textContent;
  const itemChildrensCoutn = element.lastElementChild.childElementCount;
  console.log(`Category: ${itemText}`);
  console.log(`Elements: ${itemChildrensCoutn}`);
}
