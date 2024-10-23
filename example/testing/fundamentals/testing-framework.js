const { sum, substract } = require('./math');

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

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
}

// SUM
test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

// SUBSTRACT
test('substract numbers', () => {
  const result = substract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
