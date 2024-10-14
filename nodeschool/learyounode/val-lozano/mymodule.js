const fs = require('fs');

function filteredLs(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      callback(err, null);
    } else {
      const filteredFiles = files.filter((file) => file.endsWith(`.${ext}`));

      return callback(null, filteredFiles);
    }
  });
}

module.exports = filteredLs;
