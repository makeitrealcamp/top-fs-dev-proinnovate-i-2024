const filter = require('./06-mymodule'); // Importar el módulo

const dirPath = process.argv[2]; // Ruta al directorio
const filterExt = process.argv[3]; // Extensión a filtrar

filter(dirPath, filterExt, (err, files) => {
  if (err) {
    return console.error('Error al leer el directorio:', err); // Manejar el error
  }

  // Imprimir los archivos filtrados
  files.forEach(file => {
    console.log(file);
  });
});
