export function fizzBuzz(num) {
  const divisible = (dividend, divisor) => dividend % divisor === 0;

  if (divisible(num, 3) && divisible(num, 5)) {
    return 'FizzBuzz';
  }

  if (divisible(num, 3)) {
    return 'Fizz';
  }

  if (divisible(num, 5)) {
    return 'Buzz';
  }

  return num;
}
