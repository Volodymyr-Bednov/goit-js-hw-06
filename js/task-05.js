const input = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

input.addEventListener("input", (ev) => {
  console.log(ev.currentTarget.value);
  if (ev.currentTarget.value) {
    outputText.textContent = ev.currentTarget.value;
  } else {
    outputText.textContent = "Anonymous";
  }
});
