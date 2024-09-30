const fs = require('fs');
const path = require('path');

// callback = (error, result) => {}

/**
 * Read directory blab
 * @param {string} dir
 * @param {string} ext
 * @param {function} callback
 */
function myModule(dir, ext, callback) {
  function readFolder(err, files) {
    if (err) {
      callback(err);
      return;
    }

    // 3. filtrar los archivos por extensión
    const filtered = files.filter((file) => {
      return path.extname(file) === `.${ext}`;
    });

    callback(null, filtered);
  }

  // 2. leer el directorio
  fs.readdir(dir, readFolder);
}

module.exports = myModule;
