const last = process.argv.length;

let sum = 0;
for (let i=2; i< last; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
