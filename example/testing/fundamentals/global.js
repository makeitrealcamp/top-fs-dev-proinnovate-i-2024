/* eslint-disable no-undef */
const { sumAsync, substractAsync } = require('./math');

// SUM
test('sum adds numbers', async () => {
  // Arrange
  const expected = 10;

  // Act
  const result = await sumAsync(3, 7);

  // Assert
  expect(result).toBe(expected);
});

// SUBSTRACT
test('substract numbers', async () => {
  // Arrange
  const expected = 4;

  // Act
  const result = await substractAsync(7, 3);

  // Assert
  expect(result).toBe(expected);
});
