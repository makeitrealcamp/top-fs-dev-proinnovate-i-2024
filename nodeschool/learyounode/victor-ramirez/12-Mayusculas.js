const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('Method Not Allowed');
  }

  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
