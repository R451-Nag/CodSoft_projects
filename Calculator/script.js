const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    const value = button.textContent;

    if (action === "number") {
      if (resultDisplayed) {
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
    } else if (action === "operator") {
      if (currentInput && !isOperator(currentInput.slice(-1))) {
        currentInput += value;
      }
    } else if (action === "clear") {
      currentInput = "";
    } else if (action === "delete") {
      currentInput = currentInput.slice(0, -1);
    } else if (action === "calculate") {
      try {
        currentInput = eval(currentInput).toString();
        resultDisplayed = true;
      } catch (e) {
        currentInput = "Error";
        resultDisplayed = true;
      }
    }

    display.textContent = currentInput || "0";
  });
});

function isOperator(char) {
  return ["+", "-", "*", "/", "%"].includes(char);
}
