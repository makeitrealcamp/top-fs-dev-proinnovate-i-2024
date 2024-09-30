const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dirPath, function (err, files) {
  if (err) {
    return console.error('Error al leer el directorio:', err);
  }

  const filteredFiles = files.filter(file => path.extname(file) === ext);

  filteredFiles.forEach(file => console.log(file));
});
