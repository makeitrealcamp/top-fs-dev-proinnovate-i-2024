const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('An error has occurred.');
  }

  files.forEach(file => {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
