const fs = require('fs');
const path = require('path');

module.exports = function (directory, ext, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter(file => path.extname(file) === '.' + ext);
    callback(null, filteredFiles);
  });
};
