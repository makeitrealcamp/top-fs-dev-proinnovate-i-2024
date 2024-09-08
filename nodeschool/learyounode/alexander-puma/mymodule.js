const fs = require('fs');
const path = require('path');

module.exports = function (dirName, extFilter, callback) {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${extFilter}`
    );

    callback(null, filteredFiles);
  });
};
