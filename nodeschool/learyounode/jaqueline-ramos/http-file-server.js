const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const filePath = process.argv[3];

  const readStream = fs.createReadStream(filePath);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  readStream.pipe(res);
});

server.listen(Number(process.argv[2]));
