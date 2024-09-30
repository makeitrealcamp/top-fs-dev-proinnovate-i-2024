const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf-8');

  let completeData = '';

  response.on('data', (data) => {
    completeData += data;
  })

  response.on('end', () => {
    console.log(completeData.length);
    console.log(completeData);
  });

}).on('error', console.error);
