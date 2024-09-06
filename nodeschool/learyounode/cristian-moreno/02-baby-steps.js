let sum = 0;

for (let index = 2; index < process.argv.length; index++) {
  const value = parseInt(process.argv[index]);
  sum = sum + value;
}

console.log(sum);
