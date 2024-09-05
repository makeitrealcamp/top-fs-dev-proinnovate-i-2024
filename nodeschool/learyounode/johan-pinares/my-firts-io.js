const fs = require('fs');
if (process.argv.length < 3) {
  console.log('C:\Users\Johan\Documents\BOOTCAMP\TAREAS\Semana 2-4 dia\top-fs-dev-proinnovate-i-2024\nodeschool\learyounode\johan-pinares\baby-steps.js');
  process.exit(1);
}
const filePath = process.argv[2];
try {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  console.log(lines.length - 1);
} catch (err) {
  console.error('Error al leer el archivo:', err.message);
}
