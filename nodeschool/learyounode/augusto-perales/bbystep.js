const args = process.argv;

let sum = 0;

for (let i = 2; i < args.length; i++) {
  sum += Number(args[i]);
}
console.log(sum);
