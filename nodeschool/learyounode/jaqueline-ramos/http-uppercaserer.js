const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req
      .pipe(
        map((chunk) => {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Se permite solo POST\n');
  }
});

server.listen(Number(process.argv[2]));
