const http = require('http');
const url = process.argv[2];


http.get(url, (response) => {
  let fullData = '';


  response.on('data', (chunk) => {
    fullData += chunk;
  });

  response.on('end', () => {
    console.log(fullData.length);
    console.log(fullData);
  });

  response.on('error', (err) => {
    console.error('Error:', err.message);
  });

}).on('error', (err) => {
  console.error('Error con la solicitud:', err.message);
});
