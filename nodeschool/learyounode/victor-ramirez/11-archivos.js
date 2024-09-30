const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(filePath);

  readStream.on('error', (err) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  readStream.pipe(res);
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
