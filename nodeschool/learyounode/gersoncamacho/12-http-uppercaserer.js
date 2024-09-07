const http = require('http');
const through2Map = require('through2-map');
const upperCaseTransform = through2Map((chunk) => chunk.toString().toUpperCase());

const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Solo manejar solicitudes POST
  if (req.method === 'POST') {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    req.pipe(upperCaseTransform).pipe(res);
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Método no permitido\n');
  }
});


server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
