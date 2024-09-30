const numbers = process.argv.slice(2);
const sum = numbers.reduce((acc, curr) => {
  return (acc = acc + Number(curr));
}, 0);
console.log(sum);
