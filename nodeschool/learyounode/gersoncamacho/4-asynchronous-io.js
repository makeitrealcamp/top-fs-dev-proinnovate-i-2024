const fs = require('node:fs');
//recuparar argumentos, ruta de archivo
const arg = process.argv[2];
//lear archivo
fs.readFile(arg, 'utf8', (err, data) => {
  if (err) {
    console.log("hola error")
    console.log(err)
  } else {
    //transformamos el buffer en arreglo
    const arry = Array.from(data);
    //filtramos los saltos de linee
    let count = arry.filter(i => i.charCodeAt(0) === 0x0).length;
    console.log(count)
  }
}
)
