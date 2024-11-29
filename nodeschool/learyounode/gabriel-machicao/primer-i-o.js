const fs = require('fs')

const filePath = process.argv[2];

try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
  const lineCount = data.split('\n').length - 1;
  console.log(data);
} catch (err) {
  console.error(`Error al leer el archivo: ${err.message}`);
  process.exit(1);
}
