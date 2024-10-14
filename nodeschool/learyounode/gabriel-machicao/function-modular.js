const fs = require('fs')
const path = require('path');

module.exports = function(dir, ext, callback){
  fs.readdir(dir, (error, lista) => {
    if(error){
      console.log('Ruta de directorio no encontrada');
      return callback(error)
    }
    const filesFiltered = lista.filter(file => path.extname(file) === '.' + ext);
    callback(null, filesFiltered);
  });
};
