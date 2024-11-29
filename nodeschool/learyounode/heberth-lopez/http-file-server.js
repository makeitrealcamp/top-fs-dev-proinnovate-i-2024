const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const pathFile = process.argv[3];

const server = http.createServer((_request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  const fileSream = fs.createReadStream(pathFile)
  fileSream.pipe(response)

  fileSream.on('error', (err) => {
    response.statusCode = 500;
    response.end(`Error reading file: ${err}`);
  })
})

server.listen(port);
