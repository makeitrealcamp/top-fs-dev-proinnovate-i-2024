const fs = require('fs');
const filePath = process.argv[2]; //lee la ruta del archivo
// Leer el archivo asíncronamente
fs.readFile(filePath, 'utf8', (err, data) => {
 //Define la función callback
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  const lines = data.split('\n').length - 1;
  console.log(lines);
});

