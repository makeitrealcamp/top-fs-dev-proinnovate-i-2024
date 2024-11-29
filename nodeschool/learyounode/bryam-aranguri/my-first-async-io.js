const fs = require('fs');

const filePath = process.argv[2];

function countLines(error, data) {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }

  const lines = data.split('\n').length - 1;
  console.log(lines);
}

fs.readFile(filePath, 'utf8', countLines);
