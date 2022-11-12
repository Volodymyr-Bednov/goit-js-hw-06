function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const button = document.querySelector(".change-color");
const textColor = document.querySelector("span.color");
const bodyColor = document.querySelector("body");
console.log();
button.addEventListener("click", (ev) => {
  textColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
});
