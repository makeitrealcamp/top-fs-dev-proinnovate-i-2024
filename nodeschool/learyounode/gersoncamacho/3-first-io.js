const fs = require('node:fs');
//recuparar argumentos, ruta de archivo
const arg = process.argv[2];
//lear archivo
const content = fs.readFileSync(arg);
//transformamos el buffer en arreglo
const arry = Array.from(content);
//filtramos los saltos de linea
let count = arry.filter((i) => i === 0x0A);


console.log(count.length)
