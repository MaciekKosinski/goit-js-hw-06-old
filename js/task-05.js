const myImput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");

myImput.addEventListener("input", newInput);

function newInput(event) {
    mySpan.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
}