
let counterValue = 0;

const decrement = document.querySelector ("button[data-action = 'decrement']");
const increment = document.querySelector ("button[data-action = 'increment']");
const myValue = document.querySelector ("#value");

const countDecrement = function() {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncrement = function() {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decrement.addEventListener("click", countDecrement);
increment.addEventListener("click", countIncrement);