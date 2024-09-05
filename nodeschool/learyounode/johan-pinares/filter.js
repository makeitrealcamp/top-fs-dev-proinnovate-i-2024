const fs = require('fs');
const path = require('path');
module.exports = function (directorio, extension, callback) {
  const extensionConPunto = '.' + extension;
  fs.readdir(directorio, function (error, listaArchivos) {
    if (error) {
      return callback(error);
    }
    const archivosFiltrados = listaArchivos.filter(function (archivo) {
      return path.extname(archivo) === extensionConPunto;
    });
    callback(null, archivosFiltrados);
  });
};
