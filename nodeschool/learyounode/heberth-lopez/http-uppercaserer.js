const http = require('http');
const port = process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    response.statusCode = 405;
    response.setHeader('Allow', 'POST');
    return response.end('Only POST requests');
  }

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  let content = '';
  request.on('data', (chunk) => {
    content += chunk;
  });

  request.on('end', () => {
    response.end(content.toUpperCase());
  });

  request.on('error', (err) => {
    console.log(`Error: ${err.message}`);
    response.statusCode = 500;
    response.end('Internal Server error');
  });
});

server.listen(port);
