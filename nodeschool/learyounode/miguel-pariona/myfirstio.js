// Cargar el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Obtener el argumento de la línea de comandos
const filePath = process.argv[2];

// Comprobar si se ha proporcionado un archivo
if (!filePath) {
  console.error('Por favor, proporciona la ruta al archivo como argumento.');
  process.exit(1);
}

try {
  // Leer el archivo de manera síncrona
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Contar el número de saltos de línea
  const lineCount = fileContent.split('\n').length - 1;

  // Imprimir el número de saltos de línea en la consola
  console.log(lineCount);
} catch (err) {
  // Manejar errores, como si el archivo no existe
  console.error('Error al leer el archivo:', err.message);
  process.exit(1);
}
