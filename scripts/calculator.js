const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.value += btn.dataset.value;
  });
});

function safeEval(expression) {
  if (!/^[0-9+\-*/.()]+$/.test(expression)) {
    return "Error";
  }

  try {
    return Function(`"use strict"; return (${expression})`)();
  } catch {
    return "Error";
  }
}

equalBtn.addEventListener("click", () => {
  display.value = safeEval(display.value);
});

clearBtn.addEventListener("click", () => {
  display.value = "";
});
