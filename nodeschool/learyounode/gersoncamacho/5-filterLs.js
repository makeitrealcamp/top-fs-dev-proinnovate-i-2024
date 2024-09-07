const fs = require('node:fs');
const path = require('path');
//recuparar argumentos, ruta de archivo
const arg = process.argv[2];
const filter = `.${process.argv[3]}`;


//lear archivo
fs.readdir(arg, (err, data) => {
  if (err) {
    console.log(err);
  }
  else {
    const docsTxt = data.filter(i => path.extname(i) === filter);
    docsTxt.forEach(i => console.log(i));
  }
})





