
const functionModular = require('./function-modular');

const dir = process.argv[2];
const ext = process.argv[3];

functionModular(dir, ext, (err, files) => {
  if (err) {
    // Si hay un error, mostrarlo en consola
    return console.error('Error:', err);
  }

  // Imprimir cada archivo filtrado
  files.forEach(file => console.log(file));
});
