const filter = require('./filter');
const directorio = process.argv[2];
const extension = process.argv[3];

filter(directorio, extension, function (error, listaArchivos) {
  if (error) {
    console.error('Error al leer el directorio:', error);
    return;
  }

  listaArchivos.forEach(function (archivo) {
    console.log(archivo);
  });
});
