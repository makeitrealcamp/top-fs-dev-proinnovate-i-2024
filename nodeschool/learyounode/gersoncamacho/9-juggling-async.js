const http = require('http');

let results = [];
let count = 0;

function printResults() {
  results.forEach(result => {
    console.log(result);
  });
}

function httpGet(index) {
  http.get(process.argv[2 + index], response => {
    let data = '';

    response.on('data', chunk => {
      data += chunk;
    });


    response.on('end', () => {
      results[index] = data;
      count++;

      if (count === 3) {
        printResults();
      }
    });
  }).on('error', console.error);
}

for (let i = 0; i < 3; i++) {
  results[i] = null;
  httpGet(i);
}
