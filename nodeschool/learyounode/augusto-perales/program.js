let suma = 0;
let largo = process.argv.length;

for (let i = 0; i < (largo - 2); i++) {
  suma = suma + Number(process.argv[i + 2]);
};
console.log(suma);

