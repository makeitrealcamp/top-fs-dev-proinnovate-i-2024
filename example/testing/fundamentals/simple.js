const sum = (a, b) => a - b;
const substract = (a, b) => a - b;

let result, expected;

// SUM
result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is no equal to ${expected}`);
}

// SUBSTRACT
result = substract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is no equal to ${expected}`);
}
