const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
let prev = 0;

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
    prev = 1;
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else if (output !== "" && prev === 1 && !specialChars.includes(btnValue)) {
    output = "";
    if (output === "" && specialChars.includes(btnValue)) {
      return;
    }
    output += btnValue;
    prev = 0;
  } else if (specialChars.includes(btnValue)) {
    if (output === "" && specialChars.includes(btnValue)) {
      return;
    } else if (
      specialChars.includes(btnValue) &&
      specialChars.includes(output.toString()[output.length - 1])
    ) {
      output = output.toString().slice(0, -1);
    }
    output += btnValue;
    prev = 0;
  } else {
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
