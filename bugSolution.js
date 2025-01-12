function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

const num1 = 10;
const num2 = 0;

try {
  console.log(add(num1, num2));
  console.log(subtract(num1, num2));
  console.log(multiply(num1, num2));
  console.log(divide(num1, num2));
} catch (error) {
  console.error('An error occurred:', error.message);
}
