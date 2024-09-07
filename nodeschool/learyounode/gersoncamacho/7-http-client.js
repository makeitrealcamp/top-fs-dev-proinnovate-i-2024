const http = require('http');

const url = process.argv[2];
// Realizar la solicitud HTTP
const req = http.request(url, (res) => {

  res.on('data', (chunk) => {
    console.log(chunk)

  });
});

req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
});

req.end();
