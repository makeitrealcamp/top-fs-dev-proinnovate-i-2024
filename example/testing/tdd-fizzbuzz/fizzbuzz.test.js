import { test, expect, describe } from 'vitest';

import { fizzBuzz } from './fizzbuzz';

describe('FizzBuzz', () => {
  test('should print 1 if they receive 1', () => {
    // Arrange
    const expected = 1;

    // Act
    const result = fizzBuzz(1);

    // Assert
    expect(result).toBe(expected);
  });

  test('should print 2 if they receive 2', () => {
    // Arrange
    const expected = 2;

    // Act
    const result = fizzBuzz(2);

    // Assert
    expect(result).toBe(expected);
  });

  test('should print Fizz if they receive 3', () => {
    // Arrange
    const expected = 'Fizz';

    // Act
    const result = fizzBuzz(3);

    // Assert
    expect(result).toBe(expected);
  });

  test('should print Fizz if they receive a multiple of 3', () => {
    // Arrange
    const expected = 'Fizz';

    // Act
    const result = fizzBuzz(12);

    // Assert
    expect(result).toBe(expected);
  });

  test('should print Buzz if they receive 5', () => {
    // arrange
    const expected = 'Buzz';

    // Act
    const result = fizzBuzz(5);

    // Assert
    expect(result).toBe(expected);
  });

  test('should print Buzz if they receive a multiple of 5', () => {
    // arrange
    const expected = 'Buzz';

    // Act
    const result = fizzBuzz(10);

    // Assert
    expect(result).toBe(expected);
  });

  test('should print FizzBuzz if they receive a multiple of 3 and 5', () => {
    // Arrange
    const expected = 'FizzBuzz';

    // Act
    const result = fizzBuzz(15);

    // Assert
    expect(result).toBe(expected);
  });
});
