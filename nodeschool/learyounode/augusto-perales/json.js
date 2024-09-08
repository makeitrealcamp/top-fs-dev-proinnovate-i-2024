const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.searchParams.get('iso');

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (pathname === '/api/parsetime' && iso) {
    const date = new Date(iso);

    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

    res.end(JSON.stringify(response));

  } else if (pathname === '/api/unixtime' && iso) {
    const date = new Date(iso);

    const response = {
      unixtime: date.getTime()
    };

    res.end(JSON.stringify(response));

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(Number(port), () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
