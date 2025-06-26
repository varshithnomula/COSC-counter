let count = 0;
const counter = document.getElementById("counter");

function update() {
  counter.textContent = count;
}

function increment() {
  count++;
  update();
}

function decrement() {
  if (count > 0) {
    count--;
    update();
  }
}

function reset() {
  count = 0;
  update();
}
