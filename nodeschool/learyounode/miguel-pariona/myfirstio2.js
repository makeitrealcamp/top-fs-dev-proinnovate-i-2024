// Cargar el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Obtener el argumento de la línea de comandos
const filePath = process.argv[2];

// Comprobar si se ha proporcionado un archivo
if (!filePath) {
  console.error('Por favor, proporciona la ruta al archivo como argumento.');
  process.exit(1);
}

// Leer el archivo de manera asíncrona
fs.readFile(filePath, 'utf8', (err, fileContent) => {
  if (err) {
    // Manejar errores, como si el archivo no existe
    console.error('Error al leer el archivo:', err.message);
    process.exit(1);
  }

  // Contar el número de saltos de línea
  // Ajustar el conteo si el archivo no termina con un salto de línea
  const lineCount =
    fileContent.split('\n').length - (fileContent.endsWith('\n') ? 0 : 1);

  // Imprimir el número de saltos de línea en la consola
  console.log(lineCount);
});
