let longitud = process.argv.length;
let suma = 0;
for (let i = 2; i < longitud; i++) {
  suma += Number(process.argv[i]);
}
console.log(suma);
