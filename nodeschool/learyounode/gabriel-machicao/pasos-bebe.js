
const args = process.argv.slice(2);
const numbers = args.map(Number);
let suma = 0;

for (let i=0; i<numbers.length; i++){
  suma += numbers[i];
}

console.log(suma);
