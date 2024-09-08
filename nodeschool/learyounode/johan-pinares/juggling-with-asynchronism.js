const http = require('http');
const urls = process.argv.slice(2);

let results = [];
let completedRequests = 0;
function getUrl(url, index) {
  http.get(url, (response) => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      results[index] = data;
      completedRequests++;
      if (completedRequests === urls.length) {
        results.forEach(result => console.log(result));
      }
    });
  });
}
urls.forEach((url, index) => {
  getUrl(url, index);
});
