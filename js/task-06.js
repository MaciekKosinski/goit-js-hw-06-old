const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", inBlur);

function inBlur(event) {
    const input = event.currentTarget;
    const inputLength = Number(input.dataset.length);
    
  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}