const fontSizeControl = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", (ev) => {
  console.log(ev.currentTarget.value);
  textFontSize.style.fontSize = `${ev.currentTarget.value}px`;
});
