const http = require('http');
const fs = require('fs');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  const readStream = fs.createReadStream(process.argv[3]);
  readStream.pipe(res);
});

server.listen(port);
