const http = require('http');
const { Transform } = require('stream');

const port = process.argv[2];

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});


const server = http.createServer((req, res) => {

  if(req.method === 'POST'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    req.pipe(upperCaseTransform).pipe(res);

  } else {

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Only POST requests are accepted\n');
  }
});

server.listen(Number(port));
