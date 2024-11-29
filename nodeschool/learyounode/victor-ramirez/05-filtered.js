const fs = require('fs');
const path = require('path');

// Obtener los argumentos desde la línea de comandos
const dirPath = process.argv[2]; // Ruta al directorio
const filterExt = process.argv[3]; // Extensión a filtrar

// Leer el directorio
fs.readdir(dirPath, (err, files) => {
  if (err) {
    return console.error('Error al leer el directorio:', err);
  }

  // Filtrar y mostrar los archivos con la extensión deseada
  files.forEach(file => {
    if (path.extname(file) === `.${filterExt}`) {
      console.log(file);
    }
  });
});
