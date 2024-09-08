const fs = require('fs');
const path = require('path');
const directorio = process.argv[2];
const extension = '.' + process.argv[3];
fs.readdir(directorio, function (error, listaArchivos) {
  if (error) {
    console.error('Error al leer el directorio:', error);
    return;
  }
  listaArchivos.forEach(function (archivo) {
    if (path.extname(archivo) === extension) {
      console.log(archivo);
    }
  });
});
