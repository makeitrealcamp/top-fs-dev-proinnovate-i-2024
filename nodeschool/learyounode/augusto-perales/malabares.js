const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let completedRequests = 0;


function httpGet(index) {
  http.get(urls[index], (response) => {
    let fullData = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      fullData += chunk;
    });

    response.on('end', () => {
      results[index] = fullData;
      completedRequests++;

      if (completedRequests === urls.length) {
        results.forEach(result => console.log(result));
      }
    });

    response.on('error', (err) => {
      console.error('Error:', err);
    });
  });
}

for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}
