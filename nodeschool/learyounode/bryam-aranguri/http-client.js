const http = require('http');

const url = process.argv[2];

if (!url) {
  console.error('Por favor, proporciona una URL como argumento.');
  process.exit(1);
}

http.get(url, function (response) {
   response.setEncoding('utf8');
  response.on('data', function (chunk) {
    console.log(chunk);
  });

  response.on('end', function () {
  });

  response.on('error', function (err) {
    console.error('Error en la petición:', err.message);
  });
}).on('error', function (err) {
  console.error('Error en la solicitud HTTP:', err.message);
});
