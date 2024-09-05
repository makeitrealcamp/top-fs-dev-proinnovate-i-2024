const http = require('http');


const url = process.argv[2];


http.get(url, function (response) {
  let rawData = '';
  response.setEncoding('utf8');

  response.on('data', function (chunk) {
    rawData += chunk;
  });


  response.on('end', function () {
    console.log(rawData.length);
    console.log(rawData);         
  });

  response.on('error', function (err) {
    console.error('Error en la respuesta:', err.message);
  });
}).on('error', function (err) {

  console.error('Error en la conexión:', err.message);
});
