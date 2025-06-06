let count = parseInt(localStorage.getItem("count")) || 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const themeToggle = document.getElementById("themeToggle");
const clickSound = document.getElementById("clickSound");

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function updateDisplay() {
  countDisplay.textContent = count;
  localStorage.setItem("count", count);
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
  playSound();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
    playSound();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
  playSound();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  playSound();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    count++;
    updateDisplay();
    playSound();
  } else if (e.key === "ArrowDown" && count > 0) {
    count--;
    updateDisplay();
    playSound();
  } else if (e.key.toLowerCase() === "r") {
    count = 0;
    updateDisplay();
    playSound();
  }
});

updateDisplay();
