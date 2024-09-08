const fs = require('fs');

function myFunction(path, ext, callback) {
  ext = `.${ext}`;
  fs.readdir(path, (err, files) => {
    if (err) return callback(err);

    const filteredFiles = files.filter(file => file.endsWith(ext));
    callback(null, filteredFiles);
  });
}

module.exports = myFunction;
