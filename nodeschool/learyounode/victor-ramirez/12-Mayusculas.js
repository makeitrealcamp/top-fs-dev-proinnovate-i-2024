const http = require('http');
const map = require('through2-map');

// Obtener el puerto del primer argumento
const port = process.argv[2];

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Solo aceptar peticiones POST
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('Method Not Allowed');
  }

  // Transformar el stream de entrada a mayúsculas
  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase(); // Convertir a mayúsculas
  })).pipe(res); // Enviar la respuesta
});

// Hacer que el servidor escuche en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
