const { sum, substract } = require('./math');

let result, expected;

function expect(actual) {
  const expect = {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is no equal to ${expected}`);
      }
    },
    toEqual() {},
    toBeGreaterThan() {},
    toBeLessThan() {},
  };

  return expect;
}

// SUM
result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

// SUBSTRACT
result = substract(7, 3);
expected = 4;
expect(result).toBe(expected);
