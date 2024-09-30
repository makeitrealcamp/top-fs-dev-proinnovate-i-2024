// Cargar los módulos necesarios
const http = require('http');
const map = require('through2-map');

// Obtener el puerto del primer argumento de la línea de comandos
const port = process.argv[2];

if (!port) {
  console.error('Por favor, proporciona un número de puerto.');
  process.exit(1);
}

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Solo aceptar solicitudes POST
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Método no permitido\n');
    return;
  }

  // Transformar el cuerpo de la solicitud a mayúsculas
  req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

// Escuchar en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
