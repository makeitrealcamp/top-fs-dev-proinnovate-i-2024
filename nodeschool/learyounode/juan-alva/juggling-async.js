const http = require('http');
const urls = process.argv.slice(2);
const results = [];
let count = 0;

function httpGet(index) {
  http.get(urls[index], (response) => {
    let completeData = '';

    response.setEncoding('utf-8');
    response.on('data', (data) => {
      completeData += data;
    });

    response.on('end', () => {
      results[index] = completeData;
      count += 1;

      if (count === 3) {
        results.forEach(result => {
          console.log(result);
        });
      }
    });

    response.on('error', console.error);
  }).on('error', console.error);
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
