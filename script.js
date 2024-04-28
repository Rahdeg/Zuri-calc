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
    result = evaluateExpression(expression);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("output").value = result;
}

function evaluateExpression(expression) {
  // Split the expression into numbers and operators
  let tokens = expression.split(/([-+*/])/);
  // Remove empty strings from tokens array
  tokens = tokens.filter((token) => token.trim() !== "");

  // Perform calculations
  let result = parseFloat(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    let operator = tokens[i];
    let operand = parseFloat(tokens[i + 1]);
    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        if (operand === 0) {
          throw new Error("Division by zero");
        }
        result /= operand;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
  return result;
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
