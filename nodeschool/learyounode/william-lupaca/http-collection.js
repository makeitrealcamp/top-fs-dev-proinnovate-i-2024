const http = require('http');

const url = process.argv[2];

http
  .get(url, (response) => {
    let result = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      result += chunk;
    });

    response.on('end', () => {
      console.log(result.length);
      console.log(result);
    });

    response.on('error', console.error);
  })
  .on('error', console.error);
