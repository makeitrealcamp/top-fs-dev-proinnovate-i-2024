const fs = require('fs');
const path = require('path');

/**
 * Read directory
 * @param {string} directoryName
 * @param {string} fileExtension
 * @param {function} callback
 */

function myModule(directoryName, fileExtension, callback) {
  function readFolder(err, files) {
    if (err) {
      callback(err);
      return;
    }

    // 3. Filtrar los archivos por extension
    const filtered = files.filter((file) => {
      return path.extname(file) === `.${fileExtension}`;
    });

    callback(null, filtered);
  }

  // 2. Leer el directorio
  fs.readdir(directoryName, readFolder);
}

module.exports = myModule;
