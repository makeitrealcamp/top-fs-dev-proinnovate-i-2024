const http = require('http');
const urls = process.argv.slice(2);
let results = [];
let count = 0;

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
        results.forEach(result => {
          console.log(result);
        });
      }
    });

    response.on('error', (err) => {
      console.error(`Error en la URL ${urls[index]}: ${err.message}`);
    });
  });
}

for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}
