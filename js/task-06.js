const input = document.querySelector("#validation-input");
//console.log(input.getAttribute("data-length"));
input.addEventListener("blur", (ev) => {
  const validLength = Number(ev.currentTarget.getAttribute("data-length"));
  const inputLength = ev.currentTarget.value.length;
  if (inputLength === validLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
