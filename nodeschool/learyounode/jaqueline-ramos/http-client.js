const http = require('http');

http
  .get(process.argv[2], (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      console.log(chunk);
    });

    res.on('error', console.error);
  })
  .on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
