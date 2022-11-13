function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const textColor = document.querySelector("span.color");
const bodyColor = document.querySelector("body");
button.addEventListener("click", (ev) => {
  const hexColor = getRandomHexColor();
  textColor.textContent = hexColor;
  bodyColor.style.backgroundColor = hexColor;
});
