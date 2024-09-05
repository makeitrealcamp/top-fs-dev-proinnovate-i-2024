// Cargar los módulos 'fs' y 'path'
const fs = require('fs');
const path = require('path');

// Obtener los argumentos de la línea de comandos
const directoryPath = process.argv[2];
const extension = process.argv[3];

// Comprobar si se han proporcionado los argumentos necesarios
if (!directoryPath || !extension) {
  console.error('Uso: node lsfiltrado.js <directorio> <extensión>');
  process.exit(1);
}

// Leer el directorio de manera asíncrona
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err.message);
    process.exit(1);
  }

  // Filtrar los archivos por la extensión proporcionada
  const filteredFiles = files.filter(
    (file) => path.extname(file) === `.${extension}`
  );

  // Imprimir los nombres de los archivos filtrados, uno por línea
  filteredFiles.forEach((file) => console.log(file));
});
