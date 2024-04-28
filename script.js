function appendNumber(number) {
  document.getElementById("output").value += number;
}

function appendOperator(operator) {
  let outputValue = document.getElementById("output").value;
  // If the last character of the output is not an operator or a dot, then append the operator
  if (
    !isNaN(outputValue[outputValue.length - 1]) ||
    outputValue[outputValue.length - 1] === "."
  ) {
    document.getElementById("output").value += operator;
  }
}

function clearOutput() {
  document.getElementById("output").value = "";
}

function calculate() {
  let expression = document.getElementById("output").value;
  let result;
  try {
    result = eval(expression);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("output").value = result;
}

function operate(operator) {
  let outputValue = document.getElementById("output").value;
  if (
    !isNaN(outputValue[outputValue.length - 1]) ||
    outputValue[outputValue.length - 1] === "."
  ) {
    document.getElementById("output").value += operator;
  } else {
    // Replace the last character with the new operator
    document.getElementById("output").value =
      outputValue.substring(0, outputValue.length - 1) + operator;
  }
}
