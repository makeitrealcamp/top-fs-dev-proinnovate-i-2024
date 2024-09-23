const http = require('http');
const url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');
  let fullStr = '';
  response.on('data', data => {
    fullStr += data;
  })
  response.on('end', () => {
    console.log(fullStr.length);
    console.log(fullStr);
  })
})
