function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let createElements = [];

  const size = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${size + i * 10}px`;
    element.style.height = `${size + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    createElements.push(element);
  }
  return createElements;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const parentDiv = document.querySelector("div#boxes");

createButton.addEventListener("click", (ev) => {
  const enterCount = document.querySelector("input");
  const childDiv = createBoxes(Number(enterCount.value));
  parentDiv.append(...childDiv);
});

destroyButton.addEventListener("click", (ev) => {
  destroyBoxes();
});

function destroyBoxes() {
  while (parentDiv.lastChild) {
    parentDiv.removeChild(parentDiv.lastChild);
  }
}
