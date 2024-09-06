const fs = require('fs');
const path = require('path');

// 1. crear las variables para el directorio y la extensión
const folder = process.argv[2];
const ext = `.${process.argv[3]}`;

function readFolder(err, files) {
  if (err) return;

  // 3. filtrar los archivos por extensión
  files.forEach((file) => {
    // 4. imprimir los archivos filtrados
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
}

// 2. leer el directorio
fs.readdir(folder, readFolder);
