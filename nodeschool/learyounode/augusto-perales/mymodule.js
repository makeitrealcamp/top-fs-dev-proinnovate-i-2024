//Llamada de los modulos fs y path
const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, ext, callback) {
  // Leer el directorio asíncronamente
  fs.readdir(dirPath, (err, list) => {
    if (err) {
      return callback(err);
    }

    // Filtrar archivos
    const filteredFiles = list.filter(file => path.extname(file) === '.' + ext);

    // Llamar al callback con null para el error y la lista filtrada
    callback(null, filteredFiles);
  });
};
