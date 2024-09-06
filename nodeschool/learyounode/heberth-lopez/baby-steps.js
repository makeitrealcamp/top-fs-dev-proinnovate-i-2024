const args = process.argv.slice(2)
const sum = args.reduce((acc, num) => acc + parseInt(num), 0)
console.log(sum);
