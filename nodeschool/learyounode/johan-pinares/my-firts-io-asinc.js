const fs = require('fs');
const archivo = process.argv[2];
fs.readFile(archivo, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const lineas = data.split('\n').length - 1;
  console.log(lineas);
});

