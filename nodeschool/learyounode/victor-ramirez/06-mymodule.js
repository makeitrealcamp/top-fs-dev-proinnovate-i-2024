const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, filterExt, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err); // Si hay un error, llamamos al callback con el error
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${filterExt}`);
    callback(null, filteredFiles); // Llamamos al callback con null como error y la lista filtrada
  });
};
