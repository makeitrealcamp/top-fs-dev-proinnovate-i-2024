const http = require('http');
const url = require('url');

// Función para formatear la respuesta en JSON para el endpoint /api/parsetime
function handleParseTime(isoDate) {
  const date = new Date(isoDate);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

// Función para formatear la respuesta en JSON para el endpoint /api/unixtime
function handleUnixTime(isoDate) {
  const date = new Date(isoDate);
  return {
    unixtime: date.getTime()
  };
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Parsear la URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const isoDate = parsedUrl.query.iso;

  // Manejar las solicitudes GET
  if (req.method === 'GET') {
    if (path === '/api/parsetime' && isoDate) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(handleParseTime(isoDate)));
    } else if (path === '/api/unixtime' && isoDate) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(handleUnixTime(isoDate)));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found\n');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed\n');
  }
});

// Obtener el puerto del primer argumento de la línea de comandos
const port = process.argv[2] || 3000;

// Iniciar el servidor en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
