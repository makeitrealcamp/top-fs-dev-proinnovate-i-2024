const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const filePath = process.argv[3];
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});
server.listen(port);
