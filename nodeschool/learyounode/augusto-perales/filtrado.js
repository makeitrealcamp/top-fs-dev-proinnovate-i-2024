//Importacion de los módulos fs y path
const fs = require('fs');
const path = require('path');

//Se extrae la direccion del archivo
const dirPath = process.argv[2];

//Se agrega un punto a la extención para que este completo
const ext = '.' + process.argv[3];

// Se lee asíncronamente el archivo
fs.readdir(dirPath, (err, list) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  // Filtrar archivos por la extensión
  list.forEach(file => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
