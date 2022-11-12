let counterValue = 0;
const buttonInc = document.querySelector('[data-action="increment"]');
const buttonDec = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

buttonInc.addEventListener("click", () => {
  counterValue += Number(buttonInc.textContent);
  value.textContent = counterValue;
});

buttonDec.addEventListener("click", () => {
  counterValue += Number(buttonDec.textContent);
  value.textContent = counterValue;
});
