const fs = require('fs');
const filePath = process.argv[2];

if (!filePath) {
  console.error('Por favor, proporciona la ruta al archivo como argumento.');
  process.exit(1);
}

try {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lineCount =
    fileContent.split('\n').length - (fileContent.endsWith('\n') ? 0 : 1);
  console.log(lineCount);
} catch (err) {
  console.error('Error al leer el archivo:', err.message);
  process.exit(1);
}
