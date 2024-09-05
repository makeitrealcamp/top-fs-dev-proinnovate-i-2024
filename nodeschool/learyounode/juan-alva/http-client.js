const http = require('http');
url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf-8').on('data', function (data) { console.log(data);
   })
})
