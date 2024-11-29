const filterFiles = require('./filterFiles.js'); // Importar el módulo

// Obtener la ruta del directorio y la extensión de los argumentos de la línea de comandos
const directoryPath = process.argv[2];
const extension = process.argv[3];

// Verificar que se proporcionaron ambos argumentos
if (!directoryPath || !extension) {
  console.error('Uso: node modular.js <directorio> <extensión>');
  process.exit(1);
}

// Usar la función del módulo para filtrar archivos
filterFiles(directoryPath, extension, (err, files) => {
  if (err) {
    // Imprimir el error si ocurre uno
    console.error('Error:', err.message);
    process.exit(1);
  }

  // Imprimir los nombres de los archivos filtrados, uno por línea
  files.forEach((file) => console.log(file));
});
