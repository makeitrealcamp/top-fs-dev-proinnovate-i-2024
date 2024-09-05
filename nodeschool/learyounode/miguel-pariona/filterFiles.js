const fs = require('fs');
const path = require('path');

// Función para filtrar archivos por extensión
module.exports = function (directoryPath, extension, callback) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      // Llamar al callback con el error si ocurre uno
      return callback(err);
    }

    // Filtrar los archivos por la extensión dada
    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${extension}`
    );

    // Llamar al callback con la lista de archivos filtrados
    callback(null, filteredFiles);
  });
};
