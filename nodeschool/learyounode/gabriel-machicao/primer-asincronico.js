const fs = require('fs')

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if(err){
    console.log('Error al leer el archivo');
  }

  const lineas = data.split('\n').length - 1;
  console.log(lineas);
})


