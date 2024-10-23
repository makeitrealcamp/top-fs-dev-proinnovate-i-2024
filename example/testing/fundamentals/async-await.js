const { sumAsync, substractAsync } = require('./math');

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

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
}

// SUM
test('sum adds numbers', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

// SUBSTRACT
test('substract numbers', async () => {
  const result = await substractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
