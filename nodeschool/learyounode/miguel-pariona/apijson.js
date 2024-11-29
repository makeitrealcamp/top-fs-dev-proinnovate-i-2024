const http = require('http');
const url = require('url');

// Obtener el puerto del primer argumento
const port = process.argv[2];

// Verificar que el puerto esté definido
if (!port) {
  console.error('Por favor, proporciona un puerto como argumento.');
  process.exit(1);
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Parsear la URL y los parámetros de consulta
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Verificar el endpoint
  if (pathname === '/api/parsetime') {
    // Obtener el parámetro ISO
    const iso = query.iso;

    // Verificar que el parámetro ISO esté presente
    if (!iso) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Parámetro iso es requerido' }));
      return;
    }

    // Crear un objeto Date a partir del parámetro ISO
    const date = new Date(iso);

    // Verificar que la fecha sea válida
    if (isNaN(date.getTime())) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Fecha inválida' }));
      return;
    }

    // Crear el objeto de respuesta
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    // Enviar la respuesta
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else if (pathname === '/api/unixtime') {
    // Obtener el parámetro ISO
    const iso = query.iso;

    // Verificar que el parámetro ISO esté presente
    if (!iso) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Parámetro iso es requerido' }));
      return;
    }

    // Crear un objeto Date a partir del parámetro ISO
    const date = new Date(iso);

    // Verificar que la fecha sea válida
    if (isNaN(date.getTime())) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Fecha inválida' }));
      return;
    }

    // Crear el objeto de respuesta
    const response = {
      unixtime: date.getTime(),
    };

    // Enviar la respuesta
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    // Ruta no encontrada
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
