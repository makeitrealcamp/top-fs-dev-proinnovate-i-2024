const fs = require('fs')

fs.readdir(process.argv[2], (error, lista) => {
  if(error){
    console.log('Ruta de directorio no encontrada');
  }
  lista.filter((archivo) =>
      archivo.slice(-(process.argv[3].length + 1)) === ('.' + process.argv[3]) ? console.log(archivo) : "");

})
