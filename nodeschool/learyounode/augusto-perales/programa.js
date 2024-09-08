const fs = require('fs'); //Importa el modulo fs que nos ayuda a leer archivos
const PathFile = process.argv[2]; //extraemos la direccion del archivo que nos dan para el reto
const fileContent = fs.readFileSync(PathFile, 'utf8'); // leemos el archivo y lo convertimos a cadena de texto (utf8)
const lines = fileContent.split('\n').length - 1; //se crea un arreglo donde cada elemento esta separado por donde empieza el salto de linea
//el length arrojara el numero de "oraciones" separadas por un salto de linea que deberian ser justo 1 mas que el salto de linea por eso el -1
console.log(lines);
