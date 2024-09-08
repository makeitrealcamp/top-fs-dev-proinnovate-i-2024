const http = require('http');

const urls = process.argv.slice(2);

let results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < urls.length; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(urls[index], (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });


    response.on('end', () => {
      results[index] = data;
      count++;
      if (count === urls.length) {
        printResults();
      }
    });

  }).on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });
}

for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}
