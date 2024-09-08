const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

function httpGet(index) {
  http.get(urls[index], (response) => {
    let data = '';
    response.on('error', (err) => {
      console.error(err);
    });
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      results[index] = data;
      count++;

      if (count === 3) {
        results.forEach(result => console.log(result));
      }
    });
  });
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
