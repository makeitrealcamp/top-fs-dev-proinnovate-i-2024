const mymodule = require('./mymodule');

// Leer la dirección
const PathFile = process.argv[2];
const ext = process.argv[3];

// Llamar al módulo y pasarle la función callback
mymodule(PathFile, ext, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // Imprimir los archivos uno por uno
  files.forEach(file => {
    console.log(file);
  });
});
